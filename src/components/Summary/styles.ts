import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
`

export const SummaryContent = styled.div`
  display: flex;
  position: relative;

  gap: 32px;

  overflow-x: scroll;

  @media (min-width: 768px) {
    overflow-x: hidden;
  }
`

type CardPropsType = {
  variant?: 'green'
}

export const Card = styled.div<CardPropsType>`
  display: flex;
  flex-direction: column;
  flex: 1;

  min-width: 280px;
  max-width: 352px;

  gap: 12px;
  padding: 24px 24px 24px 32px;
  border-radius: 6px;

  ${(props) =>
    props.variant === 'green'
      ? css`
          background: ${props.theme['green-700']};
        `
      : css`
          background: ${props.theme['gray-600']};
        `}

  & header {
    display: flex;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme['gray-300']};
    }
  }
  & h2 {
    font-size: 24px;

    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
`
