import * as Dialog from '@radix-ui/react-dialog'
import { styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;

  inset: 0;

  width: 100vw;
  height: 100vh;

  background: #00000075;
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;

  min-width: 32rem;

  border-radius: 0.375rem;
  gap: 2rem;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & form {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    & input {
      display: flex;

      flex: 1;

      padding: 1rem;
      gap: 0.5rem;
      border-radius: 0.375rem;

      background: ${(props) => props.theme['gray-900']};
    }
    & button[type='submit'] {
      padding: 1rem 2rem;
      border-radius: 0.375rem;

      font-size: 1rem;
      font-weight: 700;
      background: ${(props) => props.theme['green-500']};
      cursor: pointer;
      transition: background 0.1s ease-in-out;

      &:hover {
        background: ${(props) => props.theme['green-300']};
      }
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-200']};
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;

  & > svg {
    fill: ${(props) => props.theme['gray-500']};
  }
`
