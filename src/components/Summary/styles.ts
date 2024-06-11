import { styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
`

export const SummaryContent = styled.div`
  display: flex;
  position: relative;

  gap: 3.2rem;

  overflow-x: hidden;
`

type CardPropsType = {
  $variant?: 'income' | 'outcome' | 'total'
}

export const Card = styled.div<CardPropsType>`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 40rem;

  gap: 1.2rem;
  padding: 2.4rem 2.4rem 2.4rem 3.2rem;
  border-radius: 0.6rem;

  background: ${(props) =>
    props.$variant === 'total'
      ? props.theme['green-700']
      : props.$variant === 'income'
        ? props.theme['gray-600']
        : props.$variant === 'outcome'
          ? props.theme['gray-600']
          : ''};
  & h2 {
    font-size: 3.2rem;

    font-weight: 600;
    color: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-300']
        : props.$variant === 'outcome'
          ? props.theme['red-300']
          : props.$variant === 'total'
            ? props.theme.white
            : ''};
  }
`

type CardHeaderTypeProps = {
  $variant?: 'outcome' | 'income' | 'total'
}

export const CardHeader = styled.header<CardHeaderTypeProps>`
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 1.6rem;
    color: ${(props) => props.theme['gray-100']};
  }

  & svg {
    fill: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-300']
        : props.$variant === 'outcome'
          ? props.theme['red-300']
          : props.$variant === 'total'
            ? props.theme.white
            : ''};
  }
`
