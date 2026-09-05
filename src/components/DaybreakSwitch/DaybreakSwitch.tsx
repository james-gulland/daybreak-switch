import { useState, type CSSProperties } from 'react'
import './DaybreakSwitch.css'

export type DaybreakSwitchProps = {
  /** Controlled value. `true` = night, `false` = day. */
  checked?: boolean
  /** Initial value for uncontrolled usage. */
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  /** Track height in px. Width scales with it. */
  size?: number
  disabled?: boolean
  className?: string
  'aria-label'?: string
}

export function DaybreakSwitch({
  checked,
  defaultChecked = false,
  onChange,
  size = 120,
  disabled = false,
  className,
  'aria-label': ariaLabel = 'Toggle dark mode',
}: DaybreakSwitchProps) {
  const [internal, setInternal] = useState(defaultChecked)
  const isControlled = checked !== undefined
  const isNight = isControlled ? checked : internal

  const toggle = () => {
    if (disabled) return
    const next = !isNight
    if (!isControlled) setInternal(next)
    onChange?.(next)
  }

  const style = { '--h': `${size}px` } as CSSProperties

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isNight}
      aria-label={ariaLabel}
      disabled={disabled}
      data-state={isNight ? 'night' : 'day'}
      className={['dn-switch', className].filter(Boolean).join(' ')}
      style={style}
      onClick={toggle}
    >
      <span className="dn-switch__track">
        {/* Sky backgrounds: cross-faded because gradients can't be tweened */}
        <span className="dn-switch__sky dn-switch__sky--day" />
        <span className="dn-switch__sky dn-switch__sky--night" />

        {/* Stars (night) */}
        <svg
          className="dn-switch__stars"
          viewBox="0 0 230 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="#fff">
            <circle cx="26" cy="24" r="2.0" />
            <circle cx="58" cy="66" r="1.7" />
            <circle cx="74" cy="42" r="1.5" />
            <circle cx="96" cy="74" r="1.8" />
            <circle cx="112" cy="30" r="1.5" />
            <circle cx="46" cy="88" r="1.4" />
            {/* Sparkly stars */}
            <path
              transform="translate(42 34) scale(1.5)"
              d="M0,-6 Q0,0 6,0 Q0,0 0,6 Q0,0 -6,0 Q0,0 0,-6 Z"
            />
            <path
              transform="translate(124 84) scale(1.25)"
              d="M0,-6 Q0,0 6,0 Q0,0 0,6 Q0,0 -6,0 Q0,0 0,-6 Z"
            />
          </g>
        </svg>

        {/* Clouds (day): two paper-cut bands rising to the right */}
        <svg
          className="dn-switch__clouds"
          viewBox="0 0 230 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <filter id="dn-cloud-shadow" x="-10%" y="-30%" width="120%" height="160%">
              <feDropShadow dx="0" dy="-2" stdDeviation="2" floodColor="#1d4f8a" floodOpacity="0.18" />
            </filter>
          </defs>
          {/* back band */}
          <g fill="#a4d3f6" filter="url(#dn-cloud-shadow)">
            <circle cx="20" cy="62" r="40" />
            <circle cx="60" cy="90" r="40" />
            <circle cx="110" cy="86" r="38" />
            <circle cx="160" cy="68" r="32" />
            <circle cx="200" cy="80" r="50" />
            <circle cx="220" cy="44" r="38" />
          </g>
          {/* front band */}
          <g fill="#cde4fa" filter="url(#dn-cloud-shadow)">
            <circle cx="64" cy="105" r="20" />
            <circle cx="110" cy="116" r="40" />
            <circle cx="152" cy="88" r="20" />
            <circle cx="182" cy="84" r="22" />
            <circle cx="212" cy="70" r="30" />
          </g>
        </svg>

        {/* Recessed inner edge: sits above the scenery, below the knob */}
        <span className="dn-switch__inset" />

        {/* Knob + halo rings travel together */}
        <span className="dn-switch__thumb">
          {/* Halo rings */}
          <span className="dn-switch__ring dn-switch__ring--3" />
          <span className="dn-switch__ring dn-switch__ring--2" />
          <span className="dn-switch__ring dn-switch__ring--1" />
          {/* Knobs */}
          <span className="dn-switch__knob">
            <span className="dn-switch__sun" />
            <span className="dn-switch__moon" />
          </span>
        </span>
      </span>
    </button>
  )
}

export default DaybreakSwitch
