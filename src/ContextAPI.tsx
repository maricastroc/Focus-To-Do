import { useState, useContext, createContext } from 'react'

const CyclesContext = createContext({} as any)

export function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      <button onClick={() => setActiveCycle(2)}>Modify</button>
      NewCycleForm: {activeCycle}
    </h1>
  )
}

export function Countdown() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)
  return (
    <h1>
      <button onClick={() => setActiveCycle(3)}>Modify</button>
      Countdown: {activeCycle}
    </h1>
  )
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(1)
  return (
    <>
      <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
        <div>
          <NewCycleForm />
          <Countdown />
        </div>
      </CyclesContext.Provider>
    </>
  )
}
