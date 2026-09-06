import "./InfoSection.css";

export function InfoSection() {
  return (
    <section className="info" aria-labelledby="info-title">
      <div className="info__inner">
        <div className="info__video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/r6JXc4zfWw4?loop=1&playlist=r6JXc4zfWw4"
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
            So, I thought I would take a stab at it. It’s built as a button with layered SVGs
            animated entirely through CSS. I used Fable 5.1 for much of the heavy lifting, though it
            still needed a lot of design finesse - it repeatedly struggled with the cloud layers, so
            I ended up recreating them manually.
          </p>
          <p>
            In Fable’s defence, I was working from a static image I found on Pinterest rather than a
            fully vectorised design system. From my experience, when it can pull directly from Figma
            - with the layers, dimensions and positioning already defined - the results are
            noticeably more accurate.
          </p>
          <p>
            Even so, I’m really happy with how it turned out - a simple yet playful switch that
            hopefully feels as fun to use as it was to create!
          </p>
        </div>
      </div>
    </section>
  );
}
