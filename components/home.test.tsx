import React from 'react';
import { render } from '@test/test-utils';
import { Home } from './home';

describe('Home page', () => {
  it('matches snapshot', () => {
    const posts = [];

    const { asFragment } = render(<Home posts={posts} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
