import React from 'react';
import { render } from '@test/test-utils';
import { Date } from './date';

describe('Date compnent', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Date dateString='2020-01-01' />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
