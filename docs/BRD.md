# Business Requirements Document

Project: Anagram Game  
Version: 1.0  
Author: Степанчук Наталія  
Date: 2026-05-31

## 1. Business Objective

The objective of Anagram Game is to provide a simple educational web application that helps users practice word recognition, attention, and logical thinking through an interactive anagram game.

The project is also prepared as a student submission with complete documentation, license information, privacy policy, generated documentation, and Storybook component examples.

## 2. Problem Statement

Students and casual users need lightweight educational tools that are easy to run locally and understand. Many small learning projects do not include complete documentation, privacy notes, license reports, or component documentation.

This project solves both needs:

- provides a playable anagram game;
- demonstrates proper project documentation and compliance artifacts.

## 3. Stakeholders

| Stakeholder | Interest |
| --- | --- |
| Student/developer | Needs a complete project for academic submission. |
| Teacher/reviewer | Needs clear documentation and evidence that requirements are completed. |
| Player | Wants a simple and understandable game experience. |
| Future maintainer | Needs documented components, commands, and system behavior. |

## 4. Target Users

- Students who want to practice vocabulary and logic.
- Teachers reviewing the technical quality of the project.
- Developers who may extend the project with a backend API.

## 5. Scope

### In Scope

- Browser-based anagram gameplay.
- Game settings.
- Hint and skip actions.
- GDPR-style consent popup.
- Privacy policy.
- MIT license and dependency license report.
- Generated JSDoc documentation.
- Storybook stories for a base and a complex component.
- Swagger/OpenAPI documentation for two planned API endpoints.

### Out Of Scope

- Real user accounts.
- Server-side database.
- Online leaderboard.
- Payment functionality.
- Third-party analytics.
- Commercial deployment.

## 6. Business Requirements

| ID | Requirement | Priority | Acceptance Criteria |
| --- | --- | --- | --- |
| BR-01 | The game must be playable locally | High | User can start a game and submit answers in a browser. |
| BR-02 | The project must be easy to run | High | README includes installation and base commands. |
| BR-03 | The project must include legal documentation | High | LICENSE and LICENSE_REPORT.md are present. |
| BR-04 | The project must include privacy documentation | High | PRIVACY_POLICY.md is present and mentions GDPR categories. |
| BR-05 | The project must include GDPR consent UI | High | Cookie popup appears and allows category configuration. |
| BR-06 | The project must include generated docs | High | `docs/generated/index.html` exists after running docs generation. |
| BR-07 | The project must include Storybook | High | Storybook contains two documented components with variations. |
| BR-08 | The project must include API documentation | Medium | OpenAPI file describes two endpoints with schemas and examples. |

## 7. Success Criteria

The project is successful if:

- the reviewer can install dependencies and run the app locally;
- the reviewer can open generated documentation;
- the reviewer can open Storybook and test component controls;
- legal and privacy files are present in the repository;
- Swagger/OpenAPI documentation describes two endpoints;
- the project can be submitted as a GitHub pull request.

## 8. Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Large documentation video file | GitHub push may be slower or fail near file-size limits. | Keep video under 100 MB or upload externally if required. |
| No real backend API | Reviewer may expect executable endpoints. | OpenAPI clearly states the documented API is a planned backend contract. |
| Browser local storage restrictions | Consent data may be cleared by browser settings. | Privacy policy explains that data is local and removable. |
| Dependency audit warnings | Some dev tools may contain transitive warnings. | Keep dependencies updated where safe and document verification commands. |

## 9. Assumptions

- The project is evaluated as a student web project.
- Local generated documentation is acceptable if a video demonstration is included.
- Swagger/OpenAPI documentation is acceptable for API description even without a backend implementation.
- The current React frontend is the main product scope.

## 10. Dependencies

- Node.js
- npm
- React
- Vite
- Storybook
- JSDoc
- license-checker

## 11. Acceptance Checklist

- README exists and includes commands/configuration/author/license links.
- MIT license exists.
- License report exists in the project root.
- GDPR popup is available in the running app.
- Privacy policy exists in the project root.
- Generated documentation exists in `docs/generated`.
- Documentation video is included.
- Storybook contains `Button` and `CookieConsent`.
- `docs/openapi.yaml` describes two endpoints.
