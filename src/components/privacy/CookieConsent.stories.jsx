import CookieConsent from './CookieConsent';

const meta = {
  title: 'Privacy/CookieConsent',
  component: CookieConsent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    forceVisible: { control: 'boolean' },
    initialPreferences: { control: 'object' },
    onSave: { action: 'saved' },
  },
  args: {
    forceVisible: true,
    initialPreferences: {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    },
  },
};

export default meta;

export const DefaultBanner = {};

export const PreferencesEnabled = {
  args: {
    initialPreferences: {
      necessary: true,
      preferences: true,
      analytics: false,
      marketing: false,
    },
  },
};

export const AllOptionalEnabled = {
  args: {
    initialPreferences: {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    },
  },
};
