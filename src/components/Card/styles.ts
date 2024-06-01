import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  gap: 1.2rem;

  & h1 {
    font-size: 1.6rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-300']};
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.6rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-500']};
  }
`

type PriceHighlightProps = {
  $variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.h2<PriceHighlightProps>`
  font-size: 2rem;
  font-weight: 700;

  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
