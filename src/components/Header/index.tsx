import { Logo } from '@/icons/Logo'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'
import {
  HeaderContainer,
  HeaderContent,
  LogoContainer,
  NewTransactionButton,
} from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Dialog.Root>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
            <Dialog.Portal>
              <NewTransactionModal />
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </>
  )
}
