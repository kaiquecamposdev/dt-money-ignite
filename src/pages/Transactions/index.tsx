import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { SearchForm } from '@/components/SearchForm'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { formatCurrency } from '@/utils/format-currency'
import * as dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import {
  Container,
  Content,
  MainContainer,
  MainContent,
  PaginationContainer,
  PriceHighlight,
  TableContainer,
  TableHead,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const [windowWidth, setWindowWidth] = useState(0)
  const transactions = useContextSelector(
    TransactionsContext,
    ({ transactions }) => {
      return transactions
    },
  )

  const value = window.innerWidth

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [value])

  return (
    <Container>
      <Content>
        <Header />
        <MainContainer>
          <MainContent>
            <Summary />
            <TableContainer>
              {/*
              **MOBILE**
              <Title>
                <p>Transações</p>
                <span>{transactions.length} Itens</span>
              </Title> */}
              <TableHead>
                <p>Descrição</p>
                <p>Preço</p>
                <p>Categoria</p>
                <p>Data</p>
              </TableHead>
              <SearchForm />
              <TransactionsTable>
                <tbody>
                  {transactions.map(
                    ({ id, description, price, type, category, createdAt }) => {
                      if (windowWidth <= 768) {
                        // **MOBILE**
                        // return (
                        //   <Card
                        //     key={id}
                        //     description={description}
                        //     price={price}
                        //     type={type}
                        //     category={category}
                        //     createdAt={createdAt}
                        //   />
                        // )
                        return <></>
                      } else {
                        return (
                          <tr key={id}>
                            <td width="50%">{description}</td>
                            <td>
                              <PriceHighlight $variant={type}>
                                {type === 'outcome' && '- '}
                                {formatCurrency(price)}
                              </PriceHighlight>
                            </td>
                            <td>{category}</td>
                            <td>
                              {dayjs(createdAt).format('DD/MM/YYYY HH:mm')}
                            </td>
                          </tr>
                        )
                      }
                    },
                  )}
                </tbody>
              </TransactionsTable>
            </TableContainer>
            <PaginationContainer>
              <Pagination />
            </PaginationContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
}
