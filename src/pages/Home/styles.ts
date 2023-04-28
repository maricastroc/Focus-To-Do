import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

    @media (max-width: 880px) {
      max-width: 90%;
    }

    @media (max-width: 570px) {
      gap: 5rem;
    }
  }
`

export const HomeContainerBlocked = styled(HomeContainer)`
  &::after {
    position: fixed;
    inset: 0;
    width: 100%;
    min-height: 200vh;
    content: '';
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 6;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-700']};
  }
`

export const FinishedButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-700']};
  }
`
