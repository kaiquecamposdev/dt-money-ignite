import { api } from '@/lib/axios'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
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
  filteredTransactions: Transaction[]
  createNewTransaction: (data: CreateTransactionInput) => Promise<void>
  page: number
  onChangePage: (page: number) => void
  isLoading: boolean
  onChangeLoading: (value: boolean) => void
  search: string
  onChangeSearch: (query: string) => void
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsContextType) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  const fetchTransactions = useCallback(async () => {
    const response = await api.get('transactions')
    const transactions = response.data as Transaction[]

    return transactions
  }, [])

  const filteredTransactions = useMemo(() => {
    const result = transactions.filter((transaction) => {
      return (
        transaction.description.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
      )
    })

    return result
  }, [transactions, search])

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
    [transactions],
  )

  function onChangePage(page: number) {
    setPage(page)
  }

  function onChangeLoading(value: boolean) {
    setIsLoading(value)
  }

  function onChangeSearch(query: string) {
    setSearch(query)
  }

  useEffect(() => {
    if (transactions.length === 0) {
      fetchTransactions().then((data) => {
        setTransactions(data)
        setIsLoading(false)
      })
    }
  }, [fetchTransactions, transactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        filteredTransactions,
        createNewTransaction,
        page,
        onChangePage,
        isLoading,
        onChangeLoading,
        search,
        onChangeSearch,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
