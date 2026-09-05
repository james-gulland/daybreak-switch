import { useState } from 'react'
import { DayNightSwitch } from './components/DayNightSwitch'
import './App.css'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <div className="app">
      <section className="demo">
        <h1>Day / Night switch</h1>

        <div className="demo__row">
          <DayNightSwitch defaultChecked={false} />
          <DayNightSwitch defaultChecked />
        </div>

        <div className="demo__row demo__row--controlled">
          <DayNightSwitch checked={dark} onChange={setDark} size={32} />
        </div>
      </section>
    </div>
  )
}

export default App
