import type { Story, Meta } from '@storybook/react';

import { TargetBlankLink, TargetBlankLinkProps } from './index';

export default {
  component: TargetBlankLink,
  title: 'Shared/Components/TargetBlankLink',
} as Meta;

type TStory = Story<TargetBlankLinkProps>;

const Template: TStory = (args) => <TargetBlankLink {...args} />;

export const Default: TStory = Template.bind({});
Default.args = {
  className: 'text-blue-700',
  href: 'https://google.com',
  children: 'Google',
};
