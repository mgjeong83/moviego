import type { Meta, StoryObj } from '@storybook/react';
import { MediaList } from '@/app/components';

const meta = {
  title: 'Molecules/MediaList',
  component: MediaList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mediaItems: {
      control: "object",
      description: "media 정보",
      defaultValue: [
        { mediaLink: '/link1', mediaImg: '/image1.jpg', mediaAlt: 'Image 1', mediaType: '드라마', mediaTitle: 'Media Title 1', mediaPlace: '서울역' },
        { mediaLink: '/link2', mediaImg: '/image2.jpg', mediaAlt: 'Image 2', mediaType: '영화',  mediaTitle: 'Media Title 2', mediaPlace: '강남역' },
        { mediaLink: '/link3', mediaImg: '/image3.jpg', mediaAlt: 'Image 3', mediaType: '예능', mediaTitle: 'Media Title 3', mediaPlace: '신사역' },
        { mediaLink: '/link4', mediaImg: '/image4.jpg', mediaAlt: 'Image 4', mediaType: '기타', mediaTitle: 'Media Title 4', mediaPlace: '논현역' },
      ]
    },
  }
} satisfies Meta<typeof MediaList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mediaItems: [
      { mediaLink: '/link1', mediaImg: '/image1.jpg', mediaAlt: 'Image 1', mediaType: '드라마', mediaTitle: 'Media Title 1', mediaPlace: ['서울역'] },
      { mediaLink: '/link2', mediaImg: '/image2.jpg', mediaAlt: 'Image 2', mediaType: '영화',  mediaTitle: 'Media Title 2', mediaPlace: ['강남역'] },
      { mediaLink: '/link3', mediaImg: '/image3.jpg', mediaAlt: 'Image 3', mediaType: '예능', mediaTitle: 'Media Title 3', mediaPlace: ['신사역'] },
      { mediaLink: '/link4', mediaImg: '/image4.jpg', mediaAlt: 'Image 4', mediaType: '기타', mediaTitle: 'Media Title 4', mediaPlace: ['논현역'] },
    ]
  },
};