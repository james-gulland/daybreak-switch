import { useState } from "react";
import { DaybreakSwitch } from "./components/DaybreakSwitch";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="app">
      <section className="demo">
        <h1>daybreak</h1>

        <div className="demo__row">
          <div className="demo__item">
            <span id="demo-day-label">Starts on day</span>
            <DaybreakSwitch defaultChecked={false} aria-labelledby="demo-day-label" />
          </div>
          <div className="demo__item">
            <span id="demo-night-label">Starts on night</span>
            <DaybreakSwitch defaultChecked aria-labelledby="demo-night-label" />
          </div>
        </div>

        <div className="demo__row demo__row--controlled">
          <div className="demo__item">
            <label htmlFor="demo-theme">Dark mode</label>
            <DaybreakSwitch id="demo-theme" checked={dark} onChange={setDark} size={32} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
