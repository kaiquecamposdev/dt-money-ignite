import { TransactionsContext } from '@/contexts/TransactionsContext'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { Button, Content } from './styles'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const changePage = useContextSelector(
    TransactionsContext,
    ({ changePage }) => {
      return changePage
    },
  )

  function onChangePage(page: number) {
    if (pageIndex >= 0) {
      changePage(page)
    }
  }

  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <Content>
      <Button $variant="prev" onClick={() => onChangePage(pageIndex - 1)}>
        <CaretLeft size={16} /> Anterior
      </Button>
      {Array.from({
        length: pages,
      }).map((_, i) => {
        return (
          <Button key={i} $variant="page" onClick={() => onChangePage(i + 1)}>
            {i + 1}
          </Button>
        )
      })}
      <Button $variant="next" onClick={() => onChangePage(pageIndex + 1)}>
        Próximo <CaretRight size={16} />
      </Button>
    </Content>
  )
}
