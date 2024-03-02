import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    position: absolute;

    top: 0;
    left: 0;
    z-index: -1;

    min-height: calc(90px + (48px * 2));

    // 90px = height of header &&
    //  48px = padding top and bottom of header

    width: 100%;

    content: '';
    background: ${(props) => props.theme['gray-900']};
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 1.5rem;
`

export const MainContainer = styled.main`
  margin-top: calc(1.2rem - 0.1867rem - (0.64rem * 2));

  // 1.2rem = height of header &&
  // 0.1867rem = font-size of p &&
  // 0.64rem * 2 = padding top and bottom of header
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  @media (min-width: 768px) {
    gap: 64px;
  }
`

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;
`

export const TransactionsTable = styled.table`
  @media (min-width: 768px) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
      padding: 1.25rem 2rem;

      color: ${(props) => props.theme['gray-300']};
      background: ${(props) => props.theme['gray-700']};
    }

    @media (min-width: 768px) {
      td {
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
  }
`

type PriceHighlightType = {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightType>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 1.125rem;

    color: ${(props) => props.theme['gray-300']};
  }

  & span {
    color: ${(props) => props.theme['gray-500']};
  }
  @media (min-width: 768px) {
    display: none;
  }
`
