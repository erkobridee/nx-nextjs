import React from 'react';
import { render } from '@testing-library/react';

import Welcome from './index';

describe('Welcome Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Welcome />);
    expect(baseElement).toBeTruthy();
  });
});
