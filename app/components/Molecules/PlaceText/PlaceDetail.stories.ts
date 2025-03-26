import type { Meta, StoryObj } from '@storybook/react';
import { PlaceText } from '@/app/components';

const meta = {
  title: 'Molecules/PlaceText',
  component: PlaceText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: {
        type: "select",
        options: ["search", "home", "movie"],
      },
      description: "icon 이름",
      defaultValue: "home",
    },
    children: {
      control: "text",
      description: "장소 상세 정보",
      defaultValue: "home"
    }
  }
} satisfies Meta<typeof PlaceText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: "home",
    children: "주소"
  },
};
