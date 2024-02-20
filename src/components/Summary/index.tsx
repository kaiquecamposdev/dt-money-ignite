import { defaultTheme } from '@/styles/themes/default'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyDollar,
} from '@phosphor-icons/react'
import { Card, SummaryContainer, SummaryContent } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryContent>
        <Card>
          <header>
            <p>Entradas</p>
            <ArrowCircleUp size={20} fill={defaultTheme['green-300']} />
          </header>
          <h2>R$ 17.400,00</h2>
        </Card>
        <Card>
          <header>
            <p>Saídas</p>
            <ArrowCircleDown size={20} fill={defaultTheme['red-300']} />
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
