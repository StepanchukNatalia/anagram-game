import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    disabled: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Start game',
    variant: 'primary',
    disabled: false,
    type: 'button',
  },
};

export default meta;

export const Primary = {};

export const Secondary = {
  args: {
    children: 'Settings',
    variant: 'secondary',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DisabledOutline = {
  args: {
    children: 'Hint used',
    variant: 'outline',
    disabled: true,
  },
};
