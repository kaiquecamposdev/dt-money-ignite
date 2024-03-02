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
  fetchTransactions: (query?: string) => Promise<void>
  filteredTransactions: (query: string) => void
  createNewTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsContextType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  function filteredTransactions(data: Transaction[], query: string) {
    const filteredTransactionsFilter = data.filter((transaction) => {
      return (
        transaction.description.toLowerCase().includes(query.toLowerCase()) ||
        transaction.category.toLowerCase().includes(query.toLowerCase())
      )
    })

    setTransactions(filteredTransactionsFilter)
  }

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions')

    if (query) {
      filteredTransactions(response.data, query)
      return
    }

    setTransactions(response.data)
  }, [])

  const createNewTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions([response.data, ...transactions])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        filteredTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
