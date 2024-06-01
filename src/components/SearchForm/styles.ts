import { styled } from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;

  gap: 2.4rem;
`

export const SearchInput = styled.input`
  flex-grow: 1;

  font-size: 1.6rem;
  padding: 1.6rem;
  border-radius: 0.6rem;

  background: ${(props) => props.theme['gray-900']};
  box-shadow: 0 0 0 0.1rem ${(props) => props.theme['gray-900']};

  &::placeholder {
    font-size: 1.6rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.2rem;
  padding: 1.6rem;
  border-radius: 0.6rem;
  box-shadow: 0 0 0 0.1rem ${(props) => props.theme['green-300']};

  background: transparent;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-500']};

    & span {
      color: ${(props) => props.theme.white};

      transition: color 0.1s ease-in-out;
    }
    & svg {
      fill: ${(props) => props.theme.white};

      transition: fill 0.1s ease-in-out;
    }
  }
  & span {
    display: none;
  }
  & svg {
    fill: ${(props) => props.theme['green-300']};
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.2rem;

    & span {
      display: block;

      padding: 0;
      font-size: 1.6rem;
      font-weight: 700;

      color: ${(props) => props.theme['green-300']};

      transition: color 0.1s ease-in-out;
    }
  }
`
