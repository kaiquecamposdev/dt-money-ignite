import { TransactionsContext } from '@/contexts/TransactionsContext'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    ({ transactions }) => {
      return transactions
    },
  )

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.lastIncomeDate = transaction.createdAt
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
        lastIncomeDate: new Date('0000-00-00T00:00:00.000Z'),
        lastOutcomeDate: new Date('0000-00-00T00:00:00.000Z'),
      },
    )
  }, [transactions])

  return summary
}
