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

    min-height: calc(90px + (3rem * 2));

    // 90px = height of header &&
    //  3 rem = padding top and bottom of header

    min-width: 100dvw;

    content: '';
    background: ${(props) => props.theme['gray-900']};
  }
`
export const Content = styled.div`
  width: 100%;
  max-width: 70rem;

  padding: 0 1.5rem;
`

export const MainContainer = styled.main`
  margin-top: calc(90px - 0.875rem - (3rem * 2));

  // 90px = height of header &&
  // 0.875rem = font-size of p &&
  // 3rem * 2 = padding top and bottom of header
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;
`
