import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '@/app/components';

const meta = {
  title: 'Molecules/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Form',
  },
};
