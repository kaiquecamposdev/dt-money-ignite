import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { Card, CardHeader, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <Card>
          <CardHeader variant="income">
            <p>Entradas</p>
            <ArrowCircleUp size={32} />
          </CardHeader>
          <h2>R$ 17.400,00</h2>
        </Card>
        <Card>
          <CardHeader variant="outcome">
            <p>Saídas</p>
            <ArrowCircleDown size={32} />
          </CardHeader>
          <h2>R$ 1.259,00</h2>
        </Card>
        <Card variant="green">
          <CardHeader>
            <p>Total</p>
            <CurrencyDollar size={32} />
          </CardHeader>
          <h2>R$ 16.141,00</h2>
        </Card>
      </SummaryContent>
    </SummaryContainer>
  )
}
