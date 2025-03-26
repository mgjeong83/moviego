import type { Meta, StoryObj } from '@storybook/react';
import { Search } from '@/app/components';

const meta = {
  title: 'Organisms/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Search',
  },
};
