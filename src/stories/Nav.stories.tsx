import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from './Nav';
const meta: Meta<typeof Nav> = {
	title: 'ui/Nav',
	component:Nav,
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Basic: Story = {
	args: {
		//basic args here 
	},
};
