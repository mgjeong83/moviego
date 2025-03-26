import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/app/components';

const meta = {
  title: 'Atoms/SwiperMain',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: {
        type: 'radio',
        options: ['search', 'home', 'home_on', 'movie', 'movie_on', 'play', 'stop', 'error'],
      },
      description: '아이콘 이름을 선택하세요',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'home1',
  },
};
