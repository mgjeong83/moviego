import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '@/app/components';

const meta = {
  title: 'Molecules/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Banner',
  },
};
