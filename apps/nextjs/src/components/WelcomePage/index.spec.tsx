// it's not needed with React v17
// import React from 'react';

import { render } from '@testing-library/react';

import WelcomePage from './index';

describe('WelcomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WelcomePage />);
    expect(baseElement).toBeTruthy();
  });
});
