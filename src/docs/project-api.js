/**
 * @file Public documentation model for the Anagram Game project.
 * This file is intentionally documentation-first: JSDoc reads it to generate
 * the local HTML documentation stored in docs/generated.
 */

/**
 * Project-level feature description.
 *
 * @typedef {Object} ProjectFeature
 * @property {string} name Feature name shown in documentation.
 * @property {string} description Short explanation of the feature.
 * @property {string[]} gdprNotes Privacy or GDPR notes that apply to the feature.
 */

/**
 * Component documentation entry used by Storybook and generated docs.
 *
 * @typedef {Object} ComponentDoc
 * @property {string} name React component name.
 * @property {string} type Component category.
 * @property {string[]} configurableProps Props that can be changed in Storybook controls.
 * @property {string} usage Main use case in the game.
 */

/**
 * Describes the main product features and their privacy impact.
 *
 * @returns {ProjectFeature[]} Ordered list of documented project features.
 */
export const getProjectFeatures = () => [
  {
    name: 'Anagram round',
    description: 'Player receives shuffled letters, enters the original word, and gets immediate feedback.',
    gdprNotes: ['Runs locally in the browser', 'Does not transmit gameplay data to a server'],
  },
  {
    name: 'Settings',
    description: 'Difficulty, hints, and time limit are configurable for the current browser session.',
    gdprNotes: ['Preferences can be stored locally only after consent', 'No profiling or third-party tracking is used'],
  },
  {
    name: 'Cookie consent',
    description: 'GDPR-style popup explains necessary, preferences, analytics, and marketing categories.',
    gdprNotes: ['Necessary storage is always active', 'Optional categories require explicit consent'],
  },
];

/**
 * Lists the UI components documented in Storybook.
 *
 * @returns {ComponentDoc[]} Storybook component catalogue.
 */
export const getStorybookComponents = () => [
  {
    name: 'Button',
    type: 'Base UI component',
    configurableProps: ['children', 'variant', 'disabled', 'type'],
    usage: 'Primary, secondary, and outline actions across game screens.',
  },
  {
    name: 'CookieConsent',
    type: 'Complex GDPR component',
    configurableProps: ['forceVisible', 'initialPreferences', 'onSave'],
    usage: 'Consent management popup with configurable privacy categories.',
  },
];
