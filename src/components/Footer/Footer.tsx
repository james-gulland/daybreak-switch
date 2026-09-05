import { useRef, useState } from "react";
import "./Footer.css";

const SHARE_TITLE = "daybreak - a day/night switch for React";
const SHARE_TEXT = "A purely CSS-driven day/night switch for React.";
const SHARE_URL = "https://james-gulland.github.io/daybreak-switch/";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(0);

  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL });
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(SHARE_URL, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <footer className="site-footer">
      <p>
        If you really like it, share it{" "}
        <button type="button" className="site-footer__share" onClick={share}>
          <ShareIcon />
          {copied ? "Copied!" : "Share"}
        </button>
        {" · "}
        also hit me up on{" "}
        <a href="https://bsky.app/profile/jamesgulland.com" target="_blank" rel="noreferrer">
          Bluesky
        </a>
      </p>
    </footer>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
      <path d="M8 1.5v8.5M5 4l3-2.5L11 4" />
      <path d="M3.5 7.5v5.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7.5" />
    </svg>
  );
}
