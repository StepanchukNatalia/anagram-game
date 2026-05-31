# System Specification Document

Project: Anagram Game  
Version: 1.0  
Author: Степанчук Наталія  
Date: 2026-05-31

## 1. Purpose

Anagram Game is a browser-based educational game for practicing word recognition and logical thinking. The player receives a shuffled word, enters the correct original word, and receives immediate feedback.

This document describes the system structure, functional behavior, constraints, and planned API contract for the project.

## 2. System Scope

The current implementation is a frontend React application. It runs locally in the browser and does not require a backend server.

The documented API in `docs/openapi.yaml` describes a possible backend contract for future development or integration testing.

## 3. Users

- Player: starts the game, enters answers, uses hints, changes settings.
- Student/developer: runs the project locally, generates documentation, checks Storybook components.
- Teacher/reviewer: reviews source code, documentation, license report, GDPR popup, generated docs, and Storybook.

## 4. Functional Requirements

| ID | Requirement | Description |
| --- | --- | --- |
| FR-01 | Start game | The user can start an anagram round from the main screen. |
| FR-02 | Show shuffled letters | The system displays letters of the selected word in shuffled order. |
| FR-03 | Submit answer | The user can enter and check an answer. |
| FR-04 | Validate answer | The system compares the user answer with the original word. |
| FR-05 | Show result | The system shows success or error feedback. |
| FR-06 | Hint support | The user can request a hint if hints are enabled. |
| FR-07 | Skip word | The user can skip the current word and start another round. |
| FR-08 | Game timer | The system limits a round by configured time. |
| FR-09 | Settings | The user can configure difficulty, hints, and time limit. |
| FR-10 | GDPR consent | The system displays cookie/local storage consent categories. |
| FR-11 | Documentation | The project provides generated documentation and Storybook stories. |

## 5. Non-Functional Requirements

| ID | Requirement | Description |
| --- | --- | --- |
| NFR-01 | Usability | The interface must be simple and understandable for students. |
| NFR-02 | Performance | The app should load quickly in a modern browser. |
| NFR-03 | Maintainability | Components should be reusable and documented in Storybook. |
| NFR-04 | Privacy | The app must not send personal data to third-party services. |
| NFR-05 | Portability | The app must run locally with Node.js and npm. |
| NFR-06 | Documentation | Technical documentation must be generated and stored in the repository. |

## 6. System Architecture

The system uses a client-side architecture:

- React UI components render pages and reusable interface elements.
- React Router provides navigation between game pages.
- Context stores game settings.
- Custom hooks contain game logic.
- Local browser storage is used only after consent where applicable.
- Storybook documents UI components.
- JSDoc generates local HTML documentation.

Main modules:

- `src/pages` - application pages.
- `src/components` - reusable UI, layout, and privacy components.
- `src/hooks/useAnagramGame.js` - game round logic.
- `src/context/SettingsContext.jsx` - settings state.
- `src/constants/words.js` - local word catalogue.
- `docs/generated` - generated JSDoc output.
- `.storybook` - Storybook configuration.

## 7. Data Model

### Word

| Field | Type | Description |
| --- | --- | --- |
| id | string | Unique word identifier. |
| original | string | Correct answer word. |
| shuffled | string | Shuffled representation for display. |
| hint | string | Optional help text. |
| level | string | Difficulty level. |

### Game Check Request

| Field | Type | Description |
| --- | --- | --- |
| wordId | string | Identifier of the current word. |
| answer | string | User answer. |

### Game Check Response

| Field | Type | Description |
| --- | --- | --- |
| correct | boolean | Whether the answer is correct. |
| normalizedAnswer | string | Normalized submitted answer. |
| message | string | User-facing result message. |

## 8. API Specification

The planned API is documented in Swagger/OpenAPI format:

- `docs/openapi.yaml`

Documented endpoints:

- `GET /api/words/random`
- `POST /api/anagrams/check`

## 9. Privacy And GDPR

The project includes a GDPR-style popup with the following categories:

- Necessary
- Preferences
- Analytics
- Marketing

The current app does not send personal data to a backend server. Consent settings are stored locally in the browser.

## 10. Constraints

- The current project is frontend-only.
- The API contract is documented for future backend implementation.
- Internet access is not required to play the local game after dependencies are installed.
- Generated documentation must be rebuilt with `npm run docs` after documentation source changes.

## 11. Verification

The system can be checked with:

```bash
npm run lint
npm run build
npm run docs
npm run licenses
npm run build-storybook
```
