import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 3rem 0;

  & svg {
    max-width: 10.8rem;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  gap: 0.625rem;

  cursor: pointer;
  font-weight: 600;
  background: ${(props) => props.theme['green-500']};

  transition: background 0.1s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['green-300']};
  }
`
