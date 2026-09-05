import { DaybreakSwitch } from "../DaybreakSwitch";
import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>daybreak</h1>

        <div className="hero__row">
          <div className="hero__item">
            <span id="hero-day-label">Starts on day</span>
            <DaybreakSwitch aria-labelledby="hero-day-label" />
            <pre className="hero__code">
              <code>{`<DaybreakSwitch />`}</code>
            </pre>
          </div>
          <div className="hero__item">
            <span id="hero-night-label">Starts on night</span>
            <DaybreakSwitch defaultChecked aria-labelledby="hero-night-label" />
            <pre className="hero__code">
              <code>{`<DaybreakSwitch defaultChecked>`}</code>
            </pre>
          </div>
        </div>

        <div className="hero__prompt" aria-hidden="true">
          <svg viewBox="0 0 54 50">
            <path d="M38 45c2-13-5-25-20-33" />
            <path d="m20 22-2-10 10 1" />
          </svg>
          <span>try it out!</span>
        </div>
      </div>

      <p className="credit">
        a purely css-driven day / night switch for react. created by{" "}
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
  );
}
