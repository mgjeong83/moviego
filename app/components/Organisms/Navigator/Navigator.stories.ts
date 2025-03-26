import type { Meta, StoryObj } from '@storybook/react';
import { Navigator } from '@/app/components';

const meta = {
  title: 'Organisms/Navigator',
  component: Navigator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Navigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Navigator',
  },
};
