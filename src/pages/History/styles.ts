import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (max-width: 1250px) {
    padding: 4.5rem 2.5rem 1rem;
  }

  @media (max-width: 880px) {
    width: 100%;
    padding: 2.5rem 0 1rem;
  }
`

export const HistoryContainerBlocked = styled(HistoryContainer)`
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

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }

    @media (max-width: 1250px) {
      td {
        &:first-child {
          width: clamp(5rem, 30vw, 25rem);
          padding-left: 1.5rem;
        }
      }
    }

    @media (max-width: 880px) {
      table {
        min-width: 310px;
        display: flex;
        flex-wrap: wrap;
      }
      td {
        &:first-child {
          width: clamp(12rem, 30vw, 25rem);
          padding-left: 1.5rem;
        }
      }
    }
  }
`

export const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  color: ${(props) => props.theme['gray-700']};

  button {
    cursor: pointer;
    margin-top: 2rem;
    color: ${(props) => props.theme['gray-300']};
    background-color: ${(props) => props.theme['gray-600']};
    border: none;
    border-radius: 8px;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    transition: 300ms;

    &:hover {
      background-color: ${(props) => props.theme['gray-700']};
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
