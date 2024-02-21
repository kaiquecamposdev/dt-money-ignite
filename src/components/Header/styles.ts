import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 48px 0;

  & svg {
    max-width: 172.8px;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  & h1 {
    font-size: 24px;
    font-weight: 700;
  }
`
export const NewTransactionButton = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border-radius: 6px;
  gap: 10px;

  cursor: pointer;
  font-weight: 600;
  background: ${(props) => props.theme['green-500']};

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }

  @media (min-width: 768px) {
    padding: 12px 20px;
  }
`
