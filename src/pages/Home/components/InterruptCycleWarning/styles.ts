import styled from 'styled-components'

export const InterruptCycleWarningContainer = styled.div`
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
  height: 12rem;
  align-self: center;
  color: ${(props) => props.theme['green-500']};
  background-color: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 15px 15px ${(props) => props.theme['gray-900']};
  z-index: 9;

  div {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 880px) {
    text-align: center;
    padding: 2rem;
    height: 15rem;
    width: clamp(28rem, 40vw, 35rem);
  }

  @media (max-width: 570px) {
    font-size: 0.9rem;
    width: clamp(16rem, 40vw, 35rem);
    height: auto;

    div {
      flex-direction: column;
      gap: 1rem;
    }
  }
`

const InterruptWarningButtonBase = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border-color: transparent;
  padding: 0.6rem 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
  transition: 300ms;
`

export const InterruptConfirmationButton = styled(InterruptWarningButtonBase)`
  background-color: ${(props) => props.theme['green-700']};

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
  }
`

export const InterruptDenyButton = styled(InterruptWarningButtonBase)`
  background-color: ${(props) => props.theme['red-700']};

  &:hover {
    background-color: ${(props) => props.theme['red-500']};
  }
`
