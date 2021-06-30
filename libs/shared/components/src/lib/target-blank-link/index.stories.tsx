import React from 'react';
import type { Story, Meta } from '@storybook/react';

import { TargetBlankLink, TargetBlankLinkProps } from './index';

export default {
  component: TargetBlankLink,
  title: 'Shared/Components/TargetBlankLink',
} as Meta;

const Template: Story<TargetBlankLinkProps> = (args) => (
  <TargetBlankLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'text-blue-700',
  href: 'https://google.com',
  children: 'Google',
};
