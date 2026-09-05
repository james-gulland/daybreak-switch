import { useState, type CSSProperties } from "react";
import { DaybreakSwitch } from "./components/DaybreakSwitch";
import "./App.css";

const SIZE_MIN = 40;
const SIZE_MAX = 120;
const SIZE_DEFAULT = 80;

function SizePlayground() {
  const [size, setSize] = useState(SIZE_DEFAULT);
  const [disabled, setDisabled] = useState(false);

  return (
    <section className="size-demo" aria-labelledby="size-demo-title">
      <div className="size-demo__inner">
        <div className="size-demo__copy">
          <h2 id="size-demo-title">Make it yours</h2>
          <p>
            Everything in the switch is driven by one number: <code>size</code>. It sets the track
            height in pixels, and the width follows at 2.2× that. The knob, the padding, the
            shadows, even the halo rings - they all scale from it. Drag the slider and you'll see.
          </p>
          <p>
            There's also <code>disabled</code>, for when the switch should be visible but
            off-limits. It blocks clicks, sets the native disabled state, fades the opacity to 0.6
            and swaps in a not-allowed cursor.
          </p>
          <p>
            Accessibility is built in too, with keyboard support, screen-reader labels, a clear
            focus state, reduced-motion support and high-contrast styling.
          </p>
        </div>

        <div className="size-demo__playground">
          <div className="size-demo__stage" style={{ "--max-h": `${SIZE_MAX}px` } as CSSProperties}>
            <DaybreakSwitch size={size} disabled={disabled} aria-label="Size playground switch" />
          </div>

          <div className="size-demo__control">
            <div className="size-demo__control-row">
              <label htmlFor="size-slider">Size</label>
              <output htmlFor="size-slider">{size}px</output>
            </div>
            <input
              id="size-slider"
              type="range"
              min={SIZE_MIN}
              max={SIZE_MAX}
              value={size}
              onChange={event => setSize(Number(event.target.value))}
            />
            <div className="size-demo__ticks" aria-hidden="true">
              <span>{SIZE_MIN}</span>
              <span>{SIZE_MAX}</span>
            </div>
          </div>

          <label className="size-demo__check">
            <input
              type="checkbox"
              checked={disabled}
              onChange={event => setDisabled(event.target.checked)}
            />
            Disabled
          </label>
        </div>
      </div>
    </section>
  );
}

function App() {
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
            <h2 id="info-title">Remember this guy?</h2>
            <p>
              It's the classic UX designer vs. developer meme - the struggles were real! However,
              that was until AI tools came along and can now recreate in minutes...
            </p>
            <p>
              I used Fable 5.1 to do a lot of the heavy lifting on the layout and the animation, but
              as always with these tools, I had to apply design finesse to get it exactly how I
              wanted. It repeatedly got the clouds wrong, and despite a number of revisions, I ended
              up rendering them manually.
            </p>
            <p>
              In Fable's defense, I was working from a static image found on Pinterest, as opposed
              to a fully vectorised image from Figma. My experience is that if you provide exact
              design instructions to the agents, the results will infinitely improve.
            </p>
            <p>The final result is a simple and fun switch that I hope you enjoy using.</p>
          </div>
        </div>
      </section>

      <SizePlayground />
    </main>
  );
}

export default App;
