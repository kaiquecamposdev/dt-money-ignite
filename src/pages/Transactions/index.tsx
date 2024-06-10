import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { SearchForm } from '@/components/SearchForm'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { CreatePagination } from '@/utils/create-pagination'
import { formatCurrency } from '@/utils/format-currency'
import dayjs from 'dayjs'
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
  const [isLoading, setIsLoading] = useState(true)
  const { page, transactions, fetchTransactions } = useContextSelector(
    TransactionsContext,
    ({ page, transactions, fetchTransactions }) => {
      return { page, transactions, fetchTransactions }
    },
  )

  const paginatedTransactions = CreatePagination(transactions) || []
  const perPage = 10
  const totalCount = paginatedTransactions.length

  console.log(paginatedTransactions[page])

  useEffect(() => {
    if (isLoading) {
      fetchTransactions()
      setIsLoading(true)
    }
  }, [isLoading, fetchTransactions])

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
                  {isLoading ? (
                    <div>Carregando transactions...</div>
                  ) : (
                    paginatedTransactions[page].map(
                      ({
                        id,
                        description,
                        price,
                        type,
                        category,
                        createdAt,
                      }) => {
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
                      },
                    )
                  )}
                </tbody>
              </TransactionsTable>
            </TableContainer>
            <PaginationContainer>
              <Pagination
                pageIndex={page}
                perPage={perPage}
                totalCount={totalCount}
              />
            </PaginationContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
}
