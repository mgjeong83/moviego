import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@/app/components';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Footer',
  },
};
