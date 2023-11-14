import * as Dialog from '@radix-ui/react-dialog'
import { ButtonClose, Content, Overlay, Title } from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Title>Nova transação</Title>

        <form action="">
          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Valor" />
          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </form>
      </Content>

      <ButtonClose>Fechar</ButtonClose>
    </Dialog.Portal>
  )
}
