import { styled } from 'styled-components'

type PaginationButtonType = {
  $variant: 'prev' | 'next' | 'page'
}

export const Content = styled.div`
  display: flex;

  gap: 0.8rem;
`

export const Button = styled.button<PaginationButtonType>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  height: 4rem;
  padding: 0.8rem 1.6rem;
  border: 0;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  font-weight: 500;

  background: ${(props) => props.theme['gray-600']};
  color: ${(props) => props.theme.white};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background 0.1s ease-in-out;
  }
`
