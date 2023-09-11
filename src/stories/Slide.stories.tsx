import type { Meta, StoryObj } from '@storybook/react';
import { Slide } from './Slide';
const meta: Meta<typeof Slide> = {
	title: 'ui/Slide',
	component:Slide,
};

export default meta;
type Story = StoryObj<typeof Slide>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
