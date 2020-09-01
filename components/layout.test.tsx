import React from 'react';
import { render } from '@test/testUtils';
import { Layout } from './layout';

describe('Layout compnent', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Layout home={false} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
