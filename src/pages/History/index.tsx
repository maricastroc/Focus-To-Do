import { useContext, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import {
  ButtonContainer,
  HistoryContainer,
  HistoryContainerBlocked,
  HistoryList,
  Status,
} from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { CleanHistoryWarning } from './components/CleanHistoryWarning'

export function History() {
  const { cycles } = useContext(CyclesContext)
  const [cleanHistory, setCleanHistory] = useState(false)

  return (
    <>
      {cleanHistory ? (
        <>
          <HistoryContainerBlocked>
            {cleanHistory && (
              <CleanHistoryWarning onClick={() => setCleanHistory(false)} />
            )}
            <h1>My History</h1>
            <HistoryList>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Duration</th>
                    <th>Start</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cycles.map((cycle) => {
                    return (
                      <tr key={cycle.id}>
                        <td>{cycle.task}</td>
                        <td>{cycle.minutesAmount} minutes</td>
                        <td>
                          {formatDistanceToNow(new Date(cycle.startDate), {
                            addSuffix: true,
                          })}
                        </td>
                        <td>
                          {cycle.finishedDate && (
                            <Status statusColor="green">Finished</Status>
                          )}

                          {cycle.interruptedDate && (
                            <Status statusColor="red">Interrupted</Status>
                          )}

                          {!cycle.interruptedDate && !cycle.finishedDate && (
                            <Status statusColor="yellow">In Progress</Status>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </HistoryList>
          </HistoryContainerBlocked>
          {cycles.length > 0 && (
            <ButtonContainer>
              <button onClick={() => setCleanHistory(true)}>
                Clean History
              </button>
            </ButtonContainer>
          )}
        </>
      ) : (
        <>
          <HistoryContainer>
            <h1>My History</h1>
            <HistoryList>
              <table>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Duration</th>
                    <th>Start</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cycles.map((cycle) => {
                    return (
                      <tr key={cycle.id}>
                        <td>{cycle.task}</td>
                        <td>{cycle.minutesAmount} minutes</td>
                        <td>
                          {formatDistanceToNow(new Date(cycle.startDate), {
                            addSuffix: true,
                          })}
                        </td>
                        <td>
                          {cycle.finishedDate && (
                            <Status statusColor="green">Finished</Status>
                          )}

                          {cycle.interruptedDate && (
                            <Status statusColor="red">Interrupted</Status>
                          )}

                          {!cycle.interruptedDate && !cycle.finishedDate && (
                            <Status statusColor="yellow">In Progress</Status>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </HistoryList>
          </HistoryContainer>
          {cycles.length > 0 && (
            <ButtonContainer>
              <button onClick={() => setCleanHistory(true)}>
                Clean History
              </button>
            </ButtonContainer>
          )}
        </>
      )}
    </>
  )
}
