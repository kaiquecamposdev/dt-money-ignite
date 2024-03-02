import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
`

export const SummaryContent = styled.div`
  display: flex;
  position: relative;

  gap: 2rem;

  overflow-x: hidden;
`

type CardPropsType = {
  variant?: 'green'
}

export const Card = styled.div<CardPropsType>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 25rem;

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

  & h2 {
    font-size: 1.5rem;

    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`

type CardHeaderTypeProps = {
  variant?: 'default' | 'outcome' | 'income'
}

export const CardHeader = styled.header<CardHeaderTypeProps>`
  display: flex;
  justify-content: space-between;

  & svg {
    fill: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.variant === 'outcome'
          ? props.theme['red-300']
          : props.variant === 'default'
            ? props.theme.white
            : ''};
  }

  & p {
    color: ${(props) => props.theme['gray-300']};
  }
`
