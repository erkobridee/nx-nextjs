import React from 'react';
import type { Story, Meta } from '@storybook/react';

import { SharedComponents, SharedComponentsProps } from './index';

export default {
  component: SharedComponents,
  title: 'Shared/Components',
} as Meta;

const Template: Story<SharedComponentsProps> = (args) => (
  <SharedComponents {...args} />
);

export const Welcome = Template.bind({});
Welcome.args = {};
