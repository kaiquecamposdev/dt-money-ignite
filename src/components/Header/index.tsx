import { Logo } from '@/icons/Logo'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import { Button, HeaderContainer, HeaderContent, LogoContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer>
            <Logo width={40} height={38} />
            <h1>DT Money</h1>
          </LogoContainer>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>Nova Transação</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <NewTransactionModal />
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
