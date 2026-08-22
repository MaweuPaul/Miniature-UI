# Bullion UI

Bullion UI is an early-stage React component library built with TypeScript and Tailwind CSS. The project focuses on reusable APIs, predictable variants, native HTML behavior, and accessible interaction states.

> This library is currently being developed and is not ready for production use or npm installation.

## Current component

### Button

The first component supports typed visual variants, sizes, native button attributes, full-width layout, disabled behavior, and a loading state.

```tsx
import { Button } from "./components/button/button";

export function Example() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>Continue</Button>
      <Button variant="secondary">Cancel</Button>
      <Button variant="outline">Learn more</Button>
      <Button variant="ghost">Skip</Button>
      <Button variant="danger">Delete</Button>
      <Button isLoading loadingText="Saving">
        Save changes
      </Button>
    </div>
  );
}
```

#### Button props

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "outline" \| "ghost" \| "danger"` | `"primary"` | Selects the visual treatment. |
| `size` | `"small" \| "medium" \| "large"` | `"medium"` | Selects horizontal padding and text size. |
| `fullWidth` | `boolean` | `false` | Makes the button fill its container. |
| `isLoading` | `boolean` | `false` | Shows progress and disables interaction. |
| `loadingText` | `string` | `"Loading"` | Replaces the label while loading. |

`ButtonProps` extends the native React button props, so attributes such as `type`, `disabled`, `onClick`, `name`, and `aria-label` remain available.

## Technology

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Oxlint

## Local development

```powershell
git clone git@github.com:MaweuPaul/Bullion-UI.git
cd Bullion-UI/miniature-ui
npm install
npm run dev
```

Run the existing project checks:

```powershell
npm run build
npm run lint
```

## Project structure

```text
miniature-ui/
|-- public/
|-- src/
|   |-- components/
|   |   `-- button/
|   |       |-- button.tsx
|   |       `-- button.css
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- package.json
|-- tsconfig.json
`-- vite.config.ts
```

## Design foundations

Bullion UI currently uses a small Tailwind theme defined in `src/index.css`:

- `bullion`: gold brand colors for primary actions and focus states
- `ink`: deep neutral colors for text and secondary actions
- `red`: destructive actions

Components should follow these rules:

- Preserve native HTML semantics.
- Keep component variants type-safe.
- Maintain visible keyboard focus states.
- Keep primary interaction targets at least 44 pixels high.
- Never communicate status using color alone.
- Disabled and loading states must prevent interaction.
- Consumer-provided native props and classes should continue to work.

## Roadmap

- [x] Configure React, TypeScript, Vite, and Tailwind CSS
- [x] Define the initial Bullion color palette
- [x] Create typed Button variants and sizes
- [x] Add disabled and loading states
- [ ] Refine the Button loading presentation
- [ ] Add icon support
- [ ] Add automated Button tests
- [ ] Create the public package entry point
- [ ] Add Input, Textarea, Checkbox, and Radio
- [ ] Add Card and Badge
- [ ] Add Dialog, Tabs, Tooltip, and Toast
- [ ] Configure library builds and declaration files
- [ ] Publish the first npm package version

## Learning goals

- Literal unions for variants and sizes
- `Record<Key, Value>` for complete style mappings
- Intersections between custom and native element props
- Optional properties and default values
- Rest properties for forwarding native attributes
- Public exports for component functions and prop types

## Status

Bullion UI is under active development. APIs and visual decisions may change while the foundations are being established.
