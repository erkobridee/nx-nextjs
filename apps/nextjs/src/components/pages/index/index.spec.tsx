// it's not needed with React v17
import React from 'react';

import { render } from '@testing-library/react';

import IndexPage from './index';

describe('IndexPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IndexPage />);
    expect(baseElement).toBeTruthy();
  });
});
