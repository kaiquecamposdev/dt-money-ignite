import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { TransactionsContext } from '@/contexts/TransactionsContext'
import { defaultTheme } from '@/styles/themes/default'
import { formatCurrency } from '@/utils/format_currency'
import { MagnifyingGlass } from '@phosphor-icons/react'
import * as dayjs from 'dayjs'
import { useContext } from 'react'
import {
  Container,
  Content,
  MainContainer,
  MainContent,
  PriceHighlight,
  SearchButton,
  SearchContainer,
  SearchInput,
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
