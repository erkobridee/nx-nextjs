import React from 'react';
import { TargetBlankLink } from './index';

export default {
  component: TargetBlankLink,
  title: 'Shared/Components/TargetBlankLink',
};

export const Example = () => {
  return (
    <TargetBlankLink className="text-blue-700" href="https://google.com">
      google.com
    </TargetBlankLink>
  );
};
