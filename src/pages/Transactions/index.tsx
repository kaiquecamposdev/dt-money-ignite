import { Header } from '@/components/Header'
import { SearchForm } from '@/components/SearchForm'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { formatCurrency } from '@/utils/format_currency'
import * as dayjs from 'dayjs'
import { useContext } from 'react'
import {
  Container,
  Content,
  MainContainer,
  MainContent,
  PriceHighlight,
  TableContainer,
  Title,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <Container>
      <Content>
        <Header />
        <MainContainer>
          <MainContent>
            <Summary />
            <TableContainer>
              <Title>
                <p>Transações</p>
                <span></span>
              </Title>
              <SearchForm />
              <TransactionsTable>
                <tbody>
                  {transactions.map(
                    ({ id, category, createdAt, price, description, type }) => {
                      return (
                        <tr key={id}>
                          <td width="50%">{description}</td>
                          <td>
                            <PriceHighlight variant={type}>
                              {type === 'outcome' && '- '}
                              {formatCurrency(price)}
                            </PriceHighlight>
                          </td>
                          <td>{category}</td>
                          <td>{dayjs(createdAt).format('DD/MM/YYYY HH:mm')}</td>
                        </tr>
                      )
                    },
                  )}
                </tbody>
              </TransactionsTable>
            </TableContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  )
}
