import React from 'react';
import { render } from '@testing-library/react';

import TargetBlankLink from './index';

describe('TargetBlankLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TargetBlankLink />);
    expect(baseElement).toBeTruthy();
  });
});
