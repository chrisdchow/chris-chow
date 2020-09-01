import React from 'react';
import { render } from '@test/test-utils';
import { Layout } from './layout';

describe('Layout compnent', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Layout home={false} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
