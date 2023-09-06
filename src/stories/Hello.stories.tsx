import type { Meta, StoryObj } from '@storybook/react';
import { Hello } from './Hello';
const meta: Meta<typeof Hello> = {
	title: 'ui/Hello',
	component:Hello,
};

export default meta;
type Story = StoryObj<typeof Hello>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
