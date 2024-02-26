import { styled } from 'styled-components'

type PriceHighlightType = {
  variant: 'income' | 'outcome'
}

export const RowContent = styled.tr`
  display: flex;
  flex-direction: column;

  padding: 20px 32px;

  & td {
    width: 100%;

    padding: 0;

    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-700']};
  }

  @media (min-width: 768px) {
    display: block;

    padding: 0;

    td {
      padding: 20px 32px;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightType>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
