import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import {
  CleanHistoryWarningContainer,
  CleanHistoryButton,
  CleanHistoryDenyButton,
} from './styles'

interface CleanHistoryWarningProps {
  onClick: () => void
}

export function CleanHistoryWarning(props: CleanHistoryWarningProps) {
  function handleCleanHistory() {
    localStorage.removeItem('@ignite-timer:cycles-state-1.0.0')
    location.reload()
  }

  return (
    <CleanHistoryWarningContainer>
      <h2>
        All your registered tasks are going to be erased.
        <br />
        Do you want to proceed?
      </h2>
      <div>
        <CleanHistoryButton onClick={handleCleanHistory}>
          Yes, go ahead!
        </CleanHistoryButton>
        <CleanHistoryDenyButton onClick={props.onClick}>
          No, bring me back!
        </CleanHistoryDenyButton>
      </div>
    </CleanHistoryWarningContainer>
  )
}
