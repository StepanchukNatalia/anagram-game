# Anagram Game

Anagram Game is a React + Vite browser game for practicing word recognition. The player sees shuffled letters, enters the original word, can request a hint, skip a word, and configure game settings.

## Author

Vttalii_Kachut

## Tech Stack

- React 19
- Vite / Rolldown Vite
- React Router
- Storybook
- JSDoc
- license-checker

## Requirements

- Node.js 20 or newer is recommended
- npm 10 or newer

## Installation

```bash
npm install
```

## Base Commands

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build in `dist`.

```bash
npm run preview
```

Runs the production build locally.

```bash
npm run lint
```

Checks the project with ESLint.

```bash
npm run docs
```

Generates local HTML documentation into `docs/generated`.

```bash
npm run storybook
```

Starts Storybook on `http://localhost:6006`.

```bash
npm run build-storybook
```

Builds static Storybook documentation into `storybook-static`.

```bash
npm run licenses
```

Creates the dependency license report in `LICENSE_REPORT.md`.

## Configuration

The project is configured through the following files:

- `vite.config.js` - Vite React configuration.
- `eslint.config.js` - ESLint rules.
- `jsdoc.json` - generated documentation configuration.
- `.storybook/main.js` - Storybook framework and story discovery.
- `.storybook/preview.js` - global Storybook preview styles and controls.

Game options are available in the app settings screen:

- difficulty level
- hint availability
- round time limit

## GDPR And Cookies

The project includes a GDPR-style cookie and local storage popup. It documents and controls these categories:

- Necessary: always enabled for essential browser behavior.
- Preferences: stores local game settings after consent.
- Analytics: disabled by default and reserved for future anonymous local analytics.
- Marketing: disabled by default and not used by the current app.

The app does not send personal data to a backend server.

## Documentation

Generated documentation is stored in `docs/generated` after running:

```bash
npm run docs
```

The local documentation video notes are stored in `DOCUMENTATION_VIDEO.md`. A recorded documentation demo video is included in the repository root.

## Storybook

Storybook includes two documented components:

- `Button` - base UI component with primary, secondary, and disabled outline stories.
- `CookieConsent` - complex GDPR component with default, preferences-enabled, and all-options-enabled stories.

Each component exposes configurable props through Storybook controls.

## License

This project uses the MIT License. See [LICENSE](LICENSE).

Dependency licenses were checked with `license-checker`. See [LICENSE_REPORT.md](LICENSE_REPORT.md).
