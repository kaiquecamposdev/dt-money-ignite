import { Transaction } from '@/contexts/TransactionsContext'

export function CreatePagination(objects: Transaction[]) {
  let currentPage = 0
  const perPage = 10

  const pagesNumber = Math.ceil(objects.length / 10)
  const pagination: Transaction[][] = Array.from(
    { length: pagesNumber },
    () => [],
  )

  for (const object of objects) {
    if (pagination[currentPage].length === perPage) {
      currentPage++
    }

    pagination[currentPage].push(object)
  }

  return pagination
}
