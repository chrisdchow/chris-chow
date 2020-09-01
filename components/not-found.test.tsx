import React from 'react';
import { render } from '@test/test-utils';
import { NotFound } from './not-found';

describe('NotFound compnent', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<NotFound />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
