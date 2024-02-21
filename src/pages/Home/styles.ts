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

  padding: 0 24px;
`

export const MainContainer = styled.main`
  margin-top: calc(90px - 14px - (48px * 2));

  // 90px = height of header &&
  // 14px = font-size of p &&
  // 48px * 2 = padding top and bottom of header
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;

  @media (min-width: 768px) {
    gap: 64px;
  }
`
