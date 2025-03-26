import type { Meta, StoryObj } from '@storybook/react';
import { MediaPlaceList } from '@/app/components';

const meta = {
  title: 'Molecules/MediaPlaceList',
  component: MediaPlaceList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mediaPlace: {
      control: "object",
      description: "media에 나온 장소",
      default: ["장소"]
    }
  }
} satisfies Meta<typeof MediaPlaceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaPlace: ['장소']
  },
};