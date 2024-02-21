import * as Dialog from '@radix-ui/react-dialog'
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

  height: 100%;
  width: 100%;
  max-height: 50vh;
  padding: 24px;
  gap: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  bottom: 0;

  background: #202024;

  & h1 {
    font-size: 20px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    max-width: 535px;
    max-height: 60vh;
    border-radius: 6px;

    inset: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  gap: 12px;

  & input[type='number'],
  input[type='text'] {
    width: 100%;
    max-width: 487px;

    padding: 16px;
    border-radius: 6px;

    background-color: ${(props) => props.theme['gray-900']};
  }

  @media (min-width: 768px) {
    & input[type='number'],
    input[type='text'] {
      max-width: 100%;
    }
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

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 8px;
`

export const ButtonIncome = styled.button`
  display: flex;
  align-items: center;

  padding: 16px 24px;
  border-radius: 6px;
  gap: 8px;

  background-color: ${(props) => props.theme['gray-600']};
`

export const ButtonOutcome = styled.button`
  display: flex;
  align-items: center;

  padding: 16px 24px;
  border-radius: 6px;
  gap: 8px;

  background-color: ${(props) => props.theme['gray-600']};
`

export const RegisterButton = styled.button`
  width: 100%;

  padding: 16px 32px;
  border-radius: 6px;

  background: ${(props) => props.theme['green-300']};
`
