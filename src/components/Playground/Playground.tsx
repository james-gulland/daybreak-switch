import { useState, type CSSProperties } from "react";
import { DaybreakSwitch } from "../DaybreakSwitch";
import "./Playground.css";

const SIZE_MIN = 32;
const SIZE_MAX = 120;
const SIZE_DEFAULT = 76;

export function Playground() {
  const [size, setSize] = useState(SIZE_DEFAULT);

  return (
    <section className="size-demo" aria-labelledby="size-demo-title">
      <div className="size-demo__inner">
        <div className="size-demo__copy">
          <h2 id="size-demo-title">Make it yours</h2>
          <p>
            Everything in the switch is driven by one number: <code>size</code>. It sets the track
            height in pixels, and the width follows at 2.2× that. The knob, the padding, the
            shadows, even the halo rings - they all scale from it. Drag the slider to check it out.
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
          <p>
            Check out the repo{" "}
            <a href="https://github.com/james-gulland/daybreak-switch" target="_blank">
              here
            </a>
            .
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
            <pre className="size-demo__code">
              <code>{`<DaybreakSwitch disabled />`}</code>
            </pre>
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
                <output htmlFor="size-slider" className="size-demo__code">
                  <code>{`<DaybreakSwitch size={${size}} />`}</code>
                </output>
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
            <label htmlFor="size-slider">Size (px)</label>
          </div>
        </div>
      </div>
    </section>
  );
}
