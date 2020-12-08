import React from 'react';
import { render } from '@test/test-utils';
import { Home } from './home';

describe('Home page', () => {
  it('matches snapshot', () => {
    const posts = [];
    const projects = [];

    const { asFragment } = render(<Home posts={posts} projects={projects} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
