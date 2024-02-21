import { defaultTheme } from '@/styles/themes/default'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'
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
  transaction: string
  variant: 'income' | 'outcome'
  price: number
  category: string
  date: Date
}

export function Form() {
  const [transactions] = useState<TransactionsProps[]>([
    {
      transaction: 'Salário',
      variant: 'income',
      price: 3000,
      category: 'Salário',
      date: new Date(),
    },
    {
      transaction: 'Compras',
      variant: 'outcome',
      price: 1000,
      category: 'Supermercado',
      date: new Date(),
    },
  ])

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
          <tbody>
            {transactions.map(
              ({ category, date, price, transaction, variant }) => {
                return (
                  <Row
                    key={Math.random()}
                    category={category}
                    date={date}
                    price={price}
                    transaction={transaction}
                    variant={variant}
                  />
                )
              },
            )}
          </tbody>
        </Table>
      </TableContent>
    </TableContainer>
  )
}
