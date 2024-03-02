import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.25rem;
  gap: 0.75rem;

  & h1 {
    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-300']};
  }
  & span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-500']};
  }
`

type PriceHighlightProps = {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.h2<PriceHighlightProps>`
  font-size: 1.25rem;
  font-weight: 700;

  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
