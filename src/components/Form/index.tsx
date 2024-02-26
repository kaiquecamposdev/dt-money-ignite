import { defaultTheme } from '@/styles/themes/default'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Row } from './components/Row'
import {
  SearchButton,
  SearchContainer,
  SearchInput,
  Table,
  TableContainer,
  TableContent,
  Title,
} from './styles'

interface TransactionsProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: Date
}

export function Form() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    console.log(data)
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TableContainer>
      <Title>
        <p>Transações</p>
        <span></span>
      </Title>
      <SearchContainer>
        <SearchInput type="text" placeholder="Busque por transações" />
        <SearchButton>
          <MagnifyingGlass
            width={20}
            height={20}
            fill={defaultTheme['green-300']}
          />
          <span>Buscar</span>
        </SearchButton>
      </SearchContainer>
      <TableContent>
        <Table>
          {transactions.map(
            ({ id, category, createdAt, price, description, type }) => {
              return (
                <Row
                  key={id}
                  category={category}
                  date={createdAt}
                  price={price}
                  description={description}
                  type={type}
                />
              )
            },
          )}
        </Table>
      </TableContent>
    </TableContainer>
  )
}
