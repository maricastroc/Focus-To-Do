import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;
  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 880px) {
    max-width: 80vw;
    font-size: clamp(2rem, 18vw, 10rem);
    line-height: clamp(3rem, 16vw, 8rem);
  }

  @media (max-width: 570px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 18vw, 5rem);
    span {
      display: flex;
      align-items: center;
      padding: clamp(0.5rem, 2.5vw, 1.5rem);
    }
  }
`
export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 570px) {
    margin: 0;
    padding: 1rem 0;
    font-size: clamp(3rem, 12vw, 5rem);
  }
`
