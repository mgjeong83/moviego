import type { Meta, StoryObj } from '@storybook/react';
import { Media } from '@/app/components';

const meta = {
  title: 'Molecules/MediaPlace',
  component: Media,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mediaPlace: {
      control: "text",
      description: "media 상세 페이지 경로",
      defaultValue: "search",
    },
  }
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaLink: 'media',
    mediaImg: '이미지',
    mediaAlt: 'alt',
    mediaType: '드라마',
    mediaTitle: '제목',
    mediaPlace: ["1", "2", "3"]
  },
};
