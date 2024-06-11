import { TransactionsContext } from '@/contexts/TransactionsContext'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { Button, Content } from './styles'

interface PaginationProps {
  pageIndex: number
  perPage?: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage = 10,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1
  const changePage = useContextSelector(
    TransactionsContext,
    ({ changePage }) => {
      return changePage
    },
  )

  function onDecreasePage() {
    if (pageIndex >= 1) {
      changePage(pageIndex - 1)
    }
  }
  function onIncreasePage() {
    if (pageIndex + 1 < pages) {
      changePage(pageIndex + 1)
    }
  }

  return (
    <Content>
      <Button $variant="prev" onClick={() => onDecreasePage()}>
        <CaretLeft size={16} /> Anterior
      </Button>
      {Array.from({
        length: pages,
      }).map((_, i) => {
        return (
          <Button
            key={i}
            $variant="page"
            $isActive={pageIndex === i}
            onClick={() => changePage(i)}
          >
            {i + 1}
          </Button>
        )
      })}
      <Button $variant="next" onClick={() => onIncreasePage()}>
        Próximo <CaretRight size={16} />
      </Button>
    </Content>
  )
}
