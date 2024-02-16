import * as Dialog from '@radix-ui/react-dialog'
import { X } from '../icons'
import { CloseButton, Content, Overlay, Title } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X width={24} height={24} />
        </CloseButton>

        <Title>Nova transação</Title>

        <form action="">
          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
