import React from 'react';
import { render } from '@testing-library/react';

import SharedComponents from './index';

describe('SharedComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedComponents />);
    expect(baseElement).toBeTruthy();
  });
});
