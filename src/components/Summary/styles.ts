import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
`

export const SummaryContent = styled.div`
  display: flex;

  gap: 2rem;
`

type CardPropsType = {
  variant?: 'green'
}

export const Card = styled.div<CardPropsType>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  gap: 0.75rem;
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 0.375rem;

  ${(props) =>
    props.variant === 'green'
      ? css`
          background: ${props.theme['green-500']};
        `
      : css`
          background: ${props.theme['gray-600']};
        `}

  & header {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['gray-300']};
    }
  }
  & h2 {
    font-size: clamp(0.875rem, 0.6964rem + 0.8929vw, 1.5rem);

    // 320px minimum viewport width
    // 0.875rem minimum font size
    // 1440px maximum viewport width
    // 1.5rem maximum font size

    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`
