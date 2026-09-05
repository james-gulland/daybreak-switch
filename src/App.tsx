import { useState, type CSSProperties } from "react";
import { DaybreakSwitch } from "./components/DaybreakSwitch";
import "./App.css";

const SIZE_MIN = 32;
const SIZE_MAX = 120;
const SIZE_DEFAULT = 76;

function SizePlayground() {
  const [size, setSize] = useState(SIZE_DEFAULT);

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
          <div className="size-demo__example">
            <span id="size-demo-disabled-label">Disabled</span>
            <DaybreakSwitch
              disabled
              defaultChecked
              size={SIZE_DEFAULT}
              aria-labelledby="size-demo-disabled-label"
            />
          </div>

          <div className="size-demo__example">
            <div
              className="size-demo__stage"
              style={{ "--max-h": `${SIZE_MAX}px` } as CSSProperties}
            >
              <DaybreakSwitch size={size} aria-label="Size example" />
            </div>
            <div className="size-demo__control">
              <div className="size-demo__control-row">
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
            <label htmlFor="size-slider">Size</label>
          </div>
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
              It's the classic UX designer vs. developer meme - the struggle was real! At least, it
              was until AI tools came along and made it possible to recreate something like this in
              minutes…
            </p>
            <p>
              So I thought I would take a stab at it. I used Fable 5.1 to do much of the heavy
              lifting on the layout and animation. But, as always with these tools, it still needed
              some design finesse to get it exactly how I wanted. It repeatedly struggled with the
              cloud layers and, after several revisions, I ended up recreating them manually.
            </p>
            <p>
              In Fable’s defence, I was working from a static image I found on Pinterest rather than
              a fully vectorised design system. From my experience, when it can pull directly from
              Figma - with the layers, dimensions and positioning already defined - the results are
              noticeably more accurate.
            </p>
            <p>
              Even so, I’m really happy with how it turned out - a simple, playful switch that
              hopefully feels as fun to use as it was to create.
            </p>
          </div>
        </div>
      </section>

      <SizePlayground />
    </main>
  );
}

export default App;
