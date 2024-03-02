import { styled } from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;

  gap: 1.5rem;
`

export const SearchInput = styled.input`
  flex-grow: 1;

  padding: 1rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['gray-900']};
  box-shadow: 0 0 0 1px ${(props) => props.theme['gray-900']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    box-shadow: 0 0 5px 1px ${(props) => props.theme['green-500']};
  }
  & span {
    display: none;
  }
  & svg {
    fill: ${(props) => props.theme['green-300']};
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
