import { defaultTheme } from '@/styles/themes/default'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import {
  ButtonClose,
  ButtonContainer,
  ButtonIncome,
  ButtonOutcome,
  Content,
  Form,
  Overlay,
} from './styles'

export function NewTransactionModal() {
  return (
    <Overlay>
      <Content>
        <h1>Nova Transação</h1>
        <ButtonClose>
          <X size={24} fill={defaultTheme['gray-500']} />
        </ButtonClose>
        <Form>
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            id="description"
          />
          <input type="number" placeholder="Preço" name="price" id="price" />
          <input
            type="text"
            placeholder="Categoria"
            name="category"
            id="category"
          />
        </Form>
        <ButtonContainer>
          <ButtonIncome type="submit">
            <ArrowCircleUp size={20} fill={defaultTheme['green-300']} />
            <span>Entrada</span>
          </ButtonIncome>
          <ButtonOutcome type="submit">
            <ArrowCircleDown size={20} fill={defaultTheme['red-300']} />
            <span>Saída</span>
          </ButtonOutcome>
        </ButtonContainer>
      </Content>
    </Overlay>
  )
}
