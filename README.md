# daybreak-switch

An animated day/night switch for React. Click it and the sun slides right, rolls over into a moon, the sky cross-fades to night, clouds sink out of frame and stars drift in. Everything is CSS and inline SVG, no animation library, no image assets.

Under the hood it is a single `<button role="switch">`, so it keyboards and screen-reads like a checkbox.

## Try it

```bash
npm install
npm run dev
```

`src/App.tsx` is a small demo page with an uncontrolled pair and one controlled instance.

Other scripts:

```bash
npm run build     # tsc -b && vite build
npm run lint
npm run preview
```

## Using it in your own project

There is no npm package. Copy the folder:

```
src/components/DaybreakSwitch/
├── DaybreakSwitch.tsx
├── DaybreakSwitch.css
└── index.ts
```

The component imports its own CSS, so nothing else to wire up. It needs React 18 or newer and a bundler that can import a `.css` file from a module, which Vite, Next.js and Create React App all do.

```tsx
import { DaybreakSwitch } from './components/DaybreakSwitch'

function Header() {
  return <DaybreakSwitch defaultChecked={false} />
}
```

## Props

All props are optional.

| Prop | Type | Default | What it does |
| --- | --- | --- | --- |
| `checked` | `boolean` | — | Controlled value. `true` is night, `false` is day. Passing it puts the switch in controlled mode. |
| `defaultChecked` | `boolean` | `false` | Starting value when uncontrolled. Ignored if `checked` is set. |
| `onChange` | `(checked: boolean) => void` | — | Fires with the new value on every toggle, in both modes. |
| `size` | `number` | `120` | Track height in px. Width is `size * 2.2`, and the knob, padding, shadows and halo rings all scale from it. |
| `disabled` | `boolean` | `false` | Blocks clicks, sets the button's `disabled` attribute, drops opacity to 0.6 and shows a `not-allowed` cursor. |
| `className` | `string` | — | Appended to the root class, for margins or a size override. |
| `aria-label` | `string` | `'Toggle dark mode'` | Accessible name. Change it if the switch controls something other than a theme. |

The props type is exported too:

```ts
import type { DaybreakSwitchProps } from './components/DaybreakSwitch'
```

## Controlled and uncontrolled

Leave `checked` off and the switch keeps its own state. Use `onChange` if you want to hear about it:

```tsx
<DaybreakSwitch defaultChecked onChange={(night) => console.log(night)} />
```

Pass `checked` and you own the state. The switch renders what you give it and will not move on its own, so you have to handle `onChange`:

```tsx
const [dark, setDark] = useState(false)

<DaybreakSwitch checked={dark} onChange={setDark} size={32} />
```

Wiring it to a real theme usually looks like this:

```tsx
const [dark, setDark] = useState(
  () => window.matchMedia('(prefers-color-scheme: dark)').matches,
)

useEffect(() => {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
}, [dark])

return <DaybreakSwitch checked={dark} onChange={setDark} aria-label="Dark mode" />
```

## Sizing

`size` sets the CSS variable `--h` on the root element, and every other measurement is a `calc()` from it. So one number changes the whole thing, and it stays sharp at any size because nothing is a bitmap.

It looks best somewhere between 28px and 160px. Below about 24px the moon craters and stars get too small to read.

You can also set `--h` from your own stylesheet instead of passing `size`, which is handy for responsive sizes:

```css
.my-switch {
  --h: 32px;
}

@media (min-width: 768px) {
  .my-switch {
    --h: 48px;
  }
}
```

```tsx
<DaybreakSwitch className="my-switch" />
```

## Timing

Two more variables control the animation, both on `.dn-switch`:

- `--dur`, default `600ms`
- `--ease`, default `cubic-bezier(0.45, 0.05, 0.2, 1)`

Override them the same way:

```css
.my-switch {
  --dur: 350ms;
}
```

Under `prefers-reduced-motion: reduce` the CSS sets `--dur: 0ms`, so the switch snaps between states instead of animating. That is handled for you.

## Colours

Colours are hardcoded in `DaybreakSwitch.css` rather than exposed as variables, on the grounds that the sun, moon, sky and clouds are tuned to each other and a stray hue tends to break the illusion. To recolour it, edit the CSS. The parts worth knowing about:

| Selector | What it paints |
| --- | --- |
| `.dn-switch` | Outer bevel ring, a conic gradient with a dark top lip and a light bottom lip |
| `.dn-switch__sky--day` / `--night` | The two sky gradients, cross-faded rather than tweened, because gradients don't interpolate |
| `.dn-switch__inset` | Inset shadows that make the track look recessed |
| `.dn-switch__clouds` / `__stars` | The SVG scenery, which slides vertically and fades |
| `.dn-switch__sun` / `__moon` | The two knob faces. The moon's craters are stacked radial gradients |
| `.dn-switch__ring--1/2/3` | Concentric halo rings that travel with the knob and get clipped by the track |

The root element carries `data-state="day"` or `data-state="night"`, which is what all the state-dependent rules key off. Useful if you want to add your own.

## Accessibility

- Renders `<button type="button" role="switch">` with `aria-checked` tracking state, so it is reachable by Tab and toggles on Space or Enter.
- `aria-label` defaults to `'Toggle dark mode'`. Override it if that is not what the switch does.
- Focus ring is a 3px `#2f89dc` outline on `:focus-visible`, so it shows for keyboard users and not on mouse clicks.
- Honours `prefers-reduced-motion`.
- The SVG scenery is `aria-hidden`.

## Notes and limits

- No drag support. Click and keypress only.
- Not a form control. There is no hidden `<input>`, so it will not submit a value with a form. Wrap it or add your own input if you need that.
- The `dn-cloud-shadow` SVG filter uses a fixed `id`. Rendering many switches on one page duplicates the id, which browsers tolerate but a strict validator will flag.
- `all: unset` on the root resets inherited button styles, so a global button rule in your app will not leak in.
