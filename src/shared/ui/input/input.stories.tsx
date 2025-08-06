import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  parameters: {
    layout: 'Common',
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    notice: {
      control: {
        type: 'text',
      },
    },

    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['text', 'password', 'email', 'number'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Ваше имя',
    value: '',
    setValue: () => {},
    notice: 'Необходимо заполнить «Ваше имя».',
    placeholder: 'Улица, корпус, дом',
    error: '',
    type: 'text',
    required: false,
  },
};
