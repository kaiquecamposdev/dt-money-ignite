import { MagnifyingGlass } from '@/components/icons'
import { defaultTheme } from '@/styles/themes/default'
import {
  PriceHighlight,
  SearchButton,
  SearchContainer,
  SearchInput,
  Table,
  TableContainer,
  TableContent,
} from './styles'

export function Form() {
  return (
    <TableContainer>
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
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </Table>
      </TableContent>
    </TableContainer>
  )
}
