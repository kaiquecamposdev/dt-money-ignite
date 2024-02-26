import { defaultTheme } from '@/styles/themes/default'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import {
  ButtonClose,
  Content,
  OptionsContainer,
  Overlay,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Overlay>
      <Content>
        <form>
          <h1>Nova Transação</h1>
          <ButtonClose>
            <X size={24} fill={defaultTheme['gray-500']} />
          </ButtonClose>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
          <OptionsContainer>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </OptionsContainer>
          <button>Cadastrar</button>
        </form>
      </Content>
    </Overlay>
  )
}
