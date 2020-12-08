import React from 'react';
import { render } from '@test/test-utils';
import { H1 } from './heading';

describe('Heading', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<H1 />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
