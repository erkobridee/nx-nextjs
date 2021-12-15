import type { Story, Meta } from '@storybook/react';

import { SharedComponents, SharedComponentsProps } from './index';

export default {
  component: SharedComponents,
  title: 'Shared/Components',
} as Meta;

type TStory = Story<SharedComponentsProps>;

const Template: TStory = (args) => <SharedComponents {...args} />;

export const Welcome: TStory = Template.bind({});
Welcome.args = {};
