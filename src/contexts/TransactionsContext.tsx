import { api } from '@/lib/axios'
import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

interface TransactionsContextType {
  children: ReactNode
}
export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionsContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<Transaction[]>
  filteredTransactions: (data: Transaction[], query: string) => void
  createNewTransaction: (data: CreateTransactionInput) => Promise<void>
  page: number
  changePage: (page: number) => void
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsContextType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [page, setPage] = useState(0)

  const filteredTransactions = useCallback(
    (data: Transaction[], query: string) => {
      const filteredTransactionsFilter = data.filter((transaction) => {
        return (
          transaction.description.toLowerCase().includes(query.toLowerCase()) ||
          transaction.category.toLowerCase().includes(query.toLowerCase())
        )
      })

      setTransactions(filteredTransactionsFilter)
    },
    [],
  )

  const fetchTransactions = useCallback(async () => {
    const response = await api.get('transactions')
    const transactions = response.data as Transaction[]

    return transactions
  }, [])

  const createNewTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      setTransactions(transactions)

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions([response.data, ...transactions])
    },
    [transactions],
  )

  function changePage(page: number) {
    setPage(page)
  }

  useEffect(() => {
    if (transactions === undefined) {
      fetchTransactions()
        .then((data) => {
          setTransactions(data)
        })
        .catch((err) => console.log(err))
    }
  }, [transactions, fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        filteredTransactions,
        createNewTransaction,
        page,
        changePage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
