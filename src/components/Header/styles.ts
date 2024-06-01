import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 4.8rem 0;

  & svg {
    max-width: 17.2rem;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.6rem;

  & h1 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`
export const NewTransactionButton = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.6rem 1.6rem;
  border-radius: 0.4rem;
  gap: 0.6rem;

  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-500']};

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2rem;
  }
`
