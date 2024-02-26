import { styled } from 'styled-components'

export const TableContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 16px;

  width: 100%;
`

export const SearchContainer = styled.form`
  display: flex;

  gap: 24px;
`

export const SearchInput = styled.input`
  flex-grow: 1;

  padding: 16px;
  border-radius: 6px;

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

  gap: 12px;
  padding: 16px;
  border-radius: 6px;
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
    padding: 14px 32px;

    & span {
      display: block;

      padding: 0;
      font-size: 16px;
      font-weight: 700;

      color: ${(props) => props.theme['green-300']};

      transition: color 0.1s ease-in-out;
    }
  }
`

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Table = styled.table`
  width: 100%;

  @media (min-width: 768px) {
    border-collapse: separate;
    border-spacing: 0 8px;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-size: 18px;

    color: ${(props) => props.theme['gray-300']};
  }

  & span {
    color: ${(props) => props.theme['gray-500']};
  }
  @media (min-width: 768px) {
    display: none;
  }
`
