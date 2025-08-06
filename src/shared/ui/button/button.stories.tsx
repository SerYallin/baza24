import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'Common',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    onClick: {
      control: {
        disable: true,
      },
    },
    classes: {
      control: {
        disable: true,
      },
    },
    role: {
      control: {
        disable: true,
      },
    },
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'tertiary', 'menu'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'menu',
    onClick: (e) => {
      e.preventDefault();
    },
  },
};
