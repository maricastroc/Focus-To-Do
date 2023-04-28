import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: 100%;
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 1250px) {
    max-width: 90vw;
  }

  @media (max-width: 570px) {
    padding: 2.5rem 1.5rem;
  }
`
