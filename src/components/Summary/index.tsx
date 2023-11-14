import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@/components/icons'
import { Card, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <Card>
          <header>
            <p>Entradas</p>
            <ArrowCircleUp width={20} height={20} />
          </header>
          <h2>R$ 17.400,00</h2>
        </Card>
        <Card>
          <header>
            <p>Saídas</p>
            <ArrowCircleDown width={20} height={20} />
          </header>
          <h2>R$ 1.259,00</h2>
        </Card>
        <Card variant="green">
          <header>
            <p>Total</p>
            <CurrencyDollar width={20} height={20} />
          </header>
          <h2>R$ 16.141,00</h2>
        </Card>
      </SummaryContent>
    </SummaryContainer>
  )
}
