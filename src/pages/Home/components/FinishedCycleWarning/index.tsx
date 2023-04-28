import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FinishedCycleWarningContainer, BackToHomeButton } from './styles'
import { HandsClapping } from 'phosphor-react'

interface FinishedCycleWarningProps {
  onClick: () => void
}

export function FinishedCycleWarning(props: FinishedCycleWarningProps) {
  return (
    <FinishedCycleWarningContainer>
      <div>
        <HandsClapping size={32} />
        <h2>Good one! You made it!</h2>
      </div>
      <BackToHomeButton onClick={props.onClick}>Back to home</BackToHomeButton>
    </FinishedCycleWarningContainer>
  )
}
