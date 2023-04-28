import styled from 'styled-components'

export const FinishedCycleWarningContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  border-radius: 18px;
  padding: 1.25rem;
  top: 10rem;
  width: clamp(35rem, 40vw, 38rem);
  height: 14rem;
  align-self: center;
  color: ${(props) => props.theme['green-500']};
  background-color: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 15px 15px ${(props) => props.theme['gray-900']};
  z-index: 9;

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }

  svg {
    margin-left: 0.5rem;
  }

  @media (max-width: 880px) {
    text-align: center;
    padding: 2rem;
    height: 15rem;
    width: clamp(28rem, 40vw, 35rem);
  }

  @media (max-width: 570px) {
    font-size: 0.9rem;
    width: clamp(16rem, 35vw, 35rem);
    height: auto;
    h2 {
      width: 75%;
      line-height: 2rem;
    }
  }
`

export const BackToHomeButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border-color: transparent;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${(props) => props.theme['green-700']};
  color: ${(props) => props.theme['gray-100']};
  transition: 300ms;

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
  }
`
