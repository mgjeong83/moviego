import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSort } from '@/app/components';
import { action } from '@storybook/addon-actions'; 

const meta = {
    title: 'Atoms/ButtonSort',
    component: ButtonSort,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        sortType: {
            control: {
                type: "select",
                options: ["text", "layout"]
            },
            description: "sort 버튼 종류",
            defaultValue: "text",
        },
        children: {
            control: "text",
            description: "버튼 텍스트",
            defaultValue: "최신순",
        },
        onClick: {
            action: "clicked",
            description: "버튼 클릭 이벤트",
            defaultValue: "sort",
        }
    }
} satisfies Meta<typeof ButtonSort>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        sortType: "text",
        children: "최신순",
        onClick: action('clicked')
    }
}

export const Layout: Story = {
    args: {
        sortType: "layout",
        children: "이름순",
        onClick: action('clicked')
    }
}