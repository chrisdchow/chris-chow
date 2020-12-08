import React from 'react';
import { render } from '@test/test-utils';
import { P } from './paragraph';

describe('Heading', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<P />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
