import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
`
export const Content = styled(Dialog.Content)`
  position: fixed;
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 24px;
  gap: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: 0;

  background: #202024;

  & form {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 12px;

    & h1 {
      font-size: 20px;
      font-weight: bold;
    }

    & input[type='number'],
    input[type='text'] {
      width: 100%;

      padding: 16px;
      border-radius: 6px;

      background-color: ${(props) => props.theme['gray-900']};
    }

    & button:nth-last-child(1) {
      width: 100%;

      padding: 16px 32px;
      border-radius: 6px;

      font-weight: 700;
      background: ${(props) => props.theme['green-500']};
    }

    @media (min-width: 768px) {
      max-width: 32rem;
    }
  }
  @media (min-width: 768px) {
    max-width: 32rem;

    border-radius: 0.375rem;

    inset: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ButtonClose = styled(Dialog.Close)`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: max-content;
  top: 24px;
  right: 24px;

  background: transparent;
`

export const OptionsContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 8px;
`

type TransactionTypeButtonProps = {
  variant: 'income' | 'outcome'
}

// eslint-disable-next-line
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 24px;
  border-radius: 6px;
  gap: 8px;
  border: 0;

  cursor: pointer;
  background-color: ${(props) => props.theme['gray-700']};

  & svg {
    fill: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${(props) => props.theme['gray-600']};
  }
  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    transition: background-color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
