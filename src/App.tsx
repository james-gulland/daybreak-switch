import { DaybreakSwitch } from "./components/DaybreakSwitch";
import "./App.css";

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
    </main>
  );
}

export default App;
