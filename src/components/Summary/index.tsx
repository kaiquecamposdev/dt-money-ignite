import { TransactionsContext } from '@/contexts/TransactionsContext'
import { formatCurrency } from '@/utils/format_currency'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { useContext } from 'react'
import { Card, CardHeader, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryContent>
        <Card>
          <CardHeader variant="income">
            <p>Entradas</p>
            <ArrowCircleUp size={32} />
          </CardHeader>
          <h2>{formatCurrency(summary.income)}</h2>
        </Card>
        <Card>
          <CardHeader variant="outcome">
            <p>Saídas</p>
            <ArrowCircleDown size={32} />
          </CardHeader>
          <h2>{formatCurrency(summary.outcome)}</h2>
        </Card>
        <Card variant="green">
          <CardHeader>
            <p>Total</p>
            <CurrencyDollar size={32} />
          </CardHeader>
          <h2>{formatCurrency(summary.total)}</h2>
        </Card>
      </SummaryContent>
    </SummaryContainer>
  )
}
