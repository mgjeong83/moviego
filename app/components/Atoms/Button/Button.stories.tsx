import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/app/components';
import { fn } from "@storybook/test";

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["point", "list"],
      },
      description: "버튼 아이콘",
      defaultValue: "search",
    },
    imgSrc: {
      control: "text",
      description: "이미지의 src 속성",
      defaultValue: "",
    },
    imgAlt: {
      control: "text",
      description: "이미지의 alt 경로",
      defaultValue:
        "icon",
    },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Point: Story = {
  args: {
    theme: "point",
    imgSrc: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    imgAlt: 'search',
  },
};

export const List: Story = {
  args: {
    theme: "list",
    imgSrc: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    imgAlt: 'search',
  },
};