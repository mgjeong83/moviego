import type { Meta, StoryObj } from '@storybook/react';
import { Media } from '@/app/components';

const meta = {
  title: 'Molecules/Media',
  component: Media,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mediaLink: {
      control: "text",
      description: "media 상세 페이지 경로",
      defaultValue: "search",
    },
    mediaImg: {
      control: "text",
      description: "media 이미지",
      defaultValue: "search",
    },
    mediaType: {
      control: "text",
      description: "media 유형",
      defaultValue: "search",
    },
    mediaTitle: {
      control: "text",
      description: "media 제목",
      defaultValue: "search",
    },
    mediaPlace: {
      control: "text",
      description: "media에 나온 장소",
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
    mediaType: '드라마',
    mediaTitle: '제목',
    mediaPlace: ['장소']
  },
};
