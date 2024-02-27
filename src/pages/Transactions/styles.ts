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

    min-width: 100dvw;

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

export const SearchContainer = styled.form`
  display: flex;

  gap: 1.5rem;
`

export const SearchInput = styled.input`
  flex-grow: 1;

  padding: 1rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['gray-900']};
  box-shadow: 0 0 0 1px ${(props) => props.theme['gray-800']};

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 1px ${(props) => props.theme['green-300']};

  background: transparent;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 1px ${(props) => props.theme['green-500']};
  }
  & span {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 0.875rem 2rem;

    & span {
      display: block;

      padding: 0;
      font-size: 1rem;
      font-weight: 700;

      color: ${(props) => props.theme['green-300']};

      transition: color 0.1s ease-in-out;
    }
  }
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
