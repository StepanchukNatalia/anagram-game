import React, { useState } from 'react';

const STORAGE_KEY = 'anagram-game-cookie-consent';

const defaultPreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

const categoryLabels = {
  necessary: {
    title: 'Necessary',
    description: 'Required for basic game state and security. This category is always enabled.',
  },
  preferences: {
    title: 'Preferences',
    description: 'Stores local settings such as difficulty, hints, and time limit.',
  },
  analytics: {
    title: 'Analytics',
    description: 'Allows anonymous local usage statistics if analytics are added later.',
  },
  marketing: {
    title: 'Marketing',
    description: 'Reserved for promotional integrations. The current project does not use it.',
  },
};

/**
 * GDPR-style cookie and local storage consent popup.
 *
 * @param {Object} props Component props.
 * @param {boolean} [props.forceVisible=false] Keeps the popup visible for demos and Storybook.
 * @param {Object} [props.initialPreferences] Initial category values for controlled demos.
 * @param {(preferences: Object) => void} [props.onSave] Optional callback fired after consent is saved.
 * @returns {React.ReactElement|null} Consent popup or null when already accepted.
 */
const CookieConsent = ({ forceVisible = false, initialPreferences, onSave }) => {
  const [isVisible, setIsVisible] = useState(() => forceVisible || !localStorage.getItem(STORAGE_KEY));
  const [preferences, setPreferences] = useState({
    ...defaultPreferences,
    ...initialPreferences,
    necessary: true,
  });

  const saveConsent = (nextPreferences) => {
    const normalizedPreferences = {
      ...nextPreferences,
      necessary: true,
      savedAt: new Date().toISOString(),
      version: '1.0',
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizedPreferences));
    onSave?.(normalizedPreferences);
    if (!forceVisible) {
      setIsVisible(false);
    }
  };

  const toggleCategory = (category) => {
    if (category === 'necessary') return;

    setPreferences((current) => ({
      ...current,
      [category]: !current[category],
    }));
  };

  if (!forceVisible && !isVisible) return null;

  return (
    <section className="cookie-consent" aria-label="Cookie consent">
      <div className="cookie-consent__content">
        <div>
          <p className="cookie-consent__eyebrow">GDPR consent</p>
          <h2>Cookie and local storage settings</h2>
          <p>
            This game uses necessary browser storage to run correctly. Optional categories are disabled
            until you give consent and can be changed by clearing site data.
          </p>
        </div>

        <div className="cookie-consent__categories">
          {Object.entries(categoryLabels).map(([key, category]) => (
            <label className="cookie-consent__category" key={key}>
              <span>
                <strong>{category.title}</strong>
                <small>{category.description}</small>
              </span>
              <input
                type="checkbox"
                checked={preferences[key]}
                disabled={key === 'necessary'}
                onChange={() => toggleCategory(key)}
              />
            </label>
          ))}
        </div>

        <div className="cookie-consent__actions">
          <button type="button" onClick={() => saveConsent(defaultPreferences)}>
            Necessary only
          </button>
          <button type="button" onClick={() => saveConsent(preferences)}>
            Save choices
          </button>
          <button
            type="button"
            className="cookie-consent__primary"
            onClick={() =>
              saveConsent({
                necessary: true,
                preferences: true,
                analytics: true,
                marketing: true,
              })
            }
          >
            Accept all
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
