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

    min-height: calc(9rem + (4.8rem * 2));

    // 9rem / 90px = height of header &&
    //  4.8rem / 48px = padding top and bottom of header

    width: 100%;

    content: '';
    background: ${(props) => props.theme['gray-900']};
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 112rem;

  padding: 0 2.4rem;
`

export const MainContainer = styled.main`
  margin-top: calc(1.92rem - 0.298rem - (1.024rem * 2));

  // 19.2px = height of header &&
  // 2.98px = font-size of p &&
  // 10.24px * 2 = padding top and bottom of header
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.4rem;

  @media (min-width: 768px) {
    gap: 6.4rem;
  }
`

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  width: 100%;
`

export const PaginationContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: end;

  margin-top: calc(-5rem);
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;

  td {
    font-size: 1.6rem;
    padding: 2rem 3.2rem;

    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-700']};
  }

  td {
    &:first-child {
      border-top-left-radius: 0.6rem;
      border-bottom-left-radius: 0.6rem;
    }
    &:last-child {
      border-top-right-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
    }
  }
`

type PriceHighlightType = {
  $variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightType>`
  font-size: 1.6rem;
  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const Title = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    & h2 {
      font-size: 1.8rem;

      color: ${(props) => props.theme['gray-300']};
    }

    & span {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const TableHead = styled.div`
  display: none;

  @media (mid-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
