import { useContext, useEffect, useState } from 'react'
import { HandPalm, Play, HandsClapping } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  HomeContainer,
  HomeContainerBlocked,
  StartCountdownButton,
  StopCountdownButton,
  FinishedButton,
} from './styles'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'
import { InterruptCycleWarning } from './components/InterruptCycleWarning'
import { FinishedCycleWarning } from './components/FinishedCycleWarning'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Please, inform your task'),
  minutesAmount: zod
    .number()
    .min(5, 'Cycle duration must be greater than or equal to 5')
    .max(60, 'Cycle duration must be less than or equal to 60'),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm
  const task = watch('task')
  const isSubmitDisabled = !task
  const [completedCycle, setCompletedCycle] = useState(false)
  const [interruptCycle, setInterruptCycle] = useState(false)

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <>
      {interruptCycle || completedCycle ? (
        <HomeContainerBlocked>
          {interruptCycle && (
            <InterruptCycleWarning onClick={() => setInterruptCycle(false)} />
          )}
          {completedCycle && (
            <FinishedCycleWarning onClick={() => setCompletedCycle(false)} />
          )}
          <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormProvider {...newCycleForm}>
              <NewCycleForm />
            </FormProvider>
            <Countdown onFinish={() => setCompletedCycle(true)} />
            {activeCycle ? (
              <StopCountdownButton
                type="button"
                onClick={() => setInterruptCycle(true)}
              >
                <HandPalm size={24} />
                Stop
              </StopCountdownButton>
            ) : (
              <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                <Play size={24} />
                Start
              </StartCountdownButton>
            )}
          </form>
        </HomeContainerBlocked>
      ) : (
        <HomeContainer>
          {interruptCycle && (
            <InterruptCycleWarning onClick={() => setInterruptCycle(false)} />
          )}
          <form onSubmit={handleSubmit(handleCreateNewCycle)}>
            <FormProvider {...newCycleForm}>
              <NewCycleForm />
            </FormProvider>
            <Countdown onFinish={() => setCompletedCycle(true)} />
            {activeCycle ? (
              <StopCountdownButton
                type="button"
                onClick={() => setInterruptCycle(true)}
              >
                <HandPalm size={24} />
                Stop
              </StopCountdownButton>
            ) : (
              <>
                {completedCycle ? (
                  <FinishedButton
                    type="button"
                    onClick={() => setCompletedCycle(false)}
                  >
                    <HandsClapping size={24} />
                    You made it! Click to restart.
                  </FinishedButton>
                ) : (
                  <StartCountdownButton
                    type="submit"
                    disabled={isSubmitDisabled}
                  >
                    <Play size={24} />
                    Start
                  </StartCountdownButton>
                )}
              </>
            )}
          </form>
        </HomeContainer>
      )}
    </>
  )
}
