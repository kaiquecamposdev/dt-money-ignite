import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { SearchForm } from '@/components/SearchForm'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { CreatePagination } from '@/utils/create-pagination'
import { formatCurrency } from '@/utils/format-currency'
import dayjs from 'dayjs'
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
  const { page, transactions, isLoading } = useContextSelector(
    TransactionsContext,
    ({ page, transactions, isLoading }) => {
      return {
        page,
        transactions,
        isLoading,
      }
    },
  )

  const paginatedTransactions = CreatePagination(transactions)

  return (
    <Container>
      <Content>
        <Header />
        <MainContainer>
          <MainContent>
            <Summary />
            <TableContainer>
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
                    <tr>
                      <td width="100%" align="center">
                        Carregando transações...
                      </td>
                    </tr>
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
                                {type === 'outcome'
                                  ? formatCurrency(-price)
                                  : formatCurrency(price)}
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
              <Pagination pageIndex={page} totalCount={transactions.length} />
            </PaginationContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
}
