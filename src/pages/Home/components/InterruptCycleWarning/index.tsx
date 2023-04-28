import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import {
  InterruptCycleWarningContainer,
  InterruptConfirmationButton,
  InterruptDenyButton,
} from './styles'

interface InterruptCycleWarningProps {
  onClick: () => void
}

export function InterruptCycleWarning(props: InterruptCycleWarningProps) {
  const { interruptCurrentCycle } = useContext(CyclesContext)

  function handleInterruptCurrentCycle() {
    interruptCurrentCycle()
    props.onClick()
  }
  return (
    <InterruptCycleWarningContainer>
      <h2>Are you sure you want to stop the cycle?</h2>
      <div>
        <InterruptConfirmationButton onClick={handleInterruptCurrentCycle}>
          Yes, I&apos;m done!
        </InterruptConfirmationButton>
        <InterruptDenyButton onClick={props.onClick}>
          No, bring me back!
        </InterruptDenyButton>
      </div>
    </InterruptCycleWarningContainer>
  )
}
