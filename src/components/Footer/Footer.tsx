import { useRef, useState } from "react";
import "./Footer.css";

const SHARE_URL = "https://james-gulland.github.io/daybreak-switch/";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef(0);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can fail in older browsers or without a secure context.
    }
  }

  return (
    <footer className="site-footer">
      <p>
        If you really like it, share this page:{" "}
        <button type="button" className="site-footer__copy" onClick={copyLink}>
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? "Copied!" : "Copy link"}
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

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.25" />
      <path d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-6" />
    </svg>
  );
}
