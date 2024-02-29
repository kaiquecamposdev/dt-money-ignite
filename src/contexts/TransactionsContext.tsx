import { api } from '@/lib/axios'
import { ReactNode, createContext, useEffect, useState } from 'react'

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

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions')

    if (query) {
      filteredTransactions(query)
      return
    }

    setTransactions(response.data)
  }

  function filteredTransactions(query: string) {
    const filteredTransactions = transactions.filter((transaction) => {
      return (
        transaction.description.toLowerCase().includes(query.toLowerCase()) ||
        transaction.category.toLowerCase().includes(query.toLowerCase())
      )
    })

    setTransactions(filteredTransactions)
  }

  async function createNewTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions([response.data, ...transactions])
  }

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
