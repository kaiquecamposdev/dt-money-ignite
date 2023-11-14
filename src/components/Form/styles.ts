import { styled } from 'styled-components'

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
  padding: 0.875rem 2rem;
  border-radius: 0.375rem;
  box-shadow: 0 0 0 1px ${(props) => props.theme['green-300']};

  background: transparent;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px 1px ${(props) => props.theme['green-500']};
  }
  & span {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['green-300']};

    transition: color 0.1s ease-in-out;
  }
`

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
`

type PriceHighlightType = {
  variant: 'income' | 'outcome'
}

export const Table = styled.table`
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const PriceHighlight = styled.span<PriceHighlightType>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
