import React from 'react';
import { SharedComponents, SharedComponentsProps } from './index';

export default {
  component: SharedComponents,
  title: 'Shared/Components',
};

export const Welcome = () => {
  /* eslint-disable-next-line */
  const props: SharedComponentsProps = {};

  return <SharedComponents />;
};
