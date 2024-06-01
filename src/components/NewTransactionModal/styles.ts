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

  padding: 2.4rem;
  gap: 2rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  bottom: 0;

  background: ${(props) => props.theme['gray-800']};

  & form {
    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1.2rem;

    & h1 {
      font-size: 2rem;
      font-weight: bold;

      padding-bottom: 1.6rem;
    }

    & input {
      width: 100%;

      padding: 1.6rem;
      border-radius: 0.6rem;

      font-size: 1.6rem;

      background-color: ${(props) => props.theme['gray-900']};

      &::placeholder {
        font-size: 1.6rem;
      }
    }

    & input[aria-invalid='true'] {
      box-shadow: 0 0 0 0.2rem ${(props) => props.theme['red-500']};
    }

    & button:nth-last-child(1) {
      width: 100%;

      padding: 1.6rem 3.2rem;
      border-radius: 0.6rem;

      font-size: 1.6rem;
      font-weight: 700;
      background: ${(props) => props.theme['green-500']};

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-800']};
        transition: background-color 0.2s;
      }
    }

    @media (min-width: 768px) {
      max-width: 51.2rem;
    }
  }
  @media (min-width: 768px) {
    max-width: 51.2rem;

    border-radius: 0.6rem;

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
  top: 2.4rem;
  right: 2.4rem;

  background: transparent;

  & svg {
    fill: ${(props) => props.theme['gray-500']};
  }
`

export const SpanError = styled.span`
  color: ${(props) => props.theme['red-500']};
  font-size: 1.4rem;

  margin-top: calc(-0.4rem);
  padding-bottom: 0.2rem;
`

export const OptionsContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.8rem;

  &[aria-invalid='true'] > * {
    box-shadow: 0 0 0 0.2rem ${(props) => props.theme['red-500']};
  }
`

type TransactionTypeButtonProps = {
  $variant: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.6rem 2.4rem;
  border-radius: 0.6rem;
  gap: 0.6rem;
  border: 0;

  cursor: pointer;
  background-color: ${(props) => props.theme['gray-700']};

  & span {
    font-size: 1.6rem;
  }

  & svg {
    fill: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-300']
        : props.$variant === 'outcome'
          ? props.theme['red-300']
          : ''};
  }
  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }
  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background-color: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-500']
        : props.$variant === 'outcome'
          ? props.theme['red-500']
          : ''};
    transition: background-color 0.2s;

    & svg {
      fill: ${(props) => props.theme.white};
    }
  }
`
