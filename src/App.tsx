// import { useState } from "react";
import { DaybreakSwitch } from "./components/DaybreakSwitch";
import "./App.css";

function App() {
  // const [dark, setDark] = useState(false);

  return (
    <main className="app">
      <section className="demo">
        <div className="demo__content">
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

          <div className="demo__prompt" aria-hidden="true">
            <svg viewBox="0 0 54 50">
              <path d="M38 45c2-13-5-25-20-33" />
              <path d="m20 22-2-10 10 1" />
            </svg>
            <span>try it out!</span>
          </div>

          {/* <div className="demo__row demo__row--controlled">
            <div className="demo__item">
              <label htmlFor="demo-theme">Dark mode</label>
              <DaybreakSwitch id="demo-theme" checked={dark} onChange={setDark} size={32} />
            </div>
          </div> */}
        </div>

        <p className="credit">
          a day / night switch for react. created by{" "}
          <a href="https://jamesgulland.com" target="_blank">
            james gulland
          </a>
          . grab the code{" "}
          <a href="https://github.com/james-gulland/daybreak-switch" target="_blank">
            here
          </a>
          .
        </p>
      </section>

      <section className="info" aria-labelledby="info-title">
        <div className="info__inner">
          <div className="info__video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/r6JXc4zfWw4"
              title="UX Designer vs Developer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="info__copy">
            <h2 id="info-title">remember this guy?</h2>
            <p>It's the classic UX designer vs. developer meme. But oh how times have changed...</p>
            <p>
              With the assistance of Fable 5.1, I had recreated it in about 20 minutes. The first
              prompt resolved pretty much most of the mechanics of the switch and the animation,
              however, as with all ai-generated code, there was a lot of design finesse that needed
              to be applied.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
