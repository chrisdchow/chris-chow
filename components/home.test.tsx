import React from 'react';
import { render, fireEvent } from '@test/testUtils';
import { Home } from './home';

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {});
    expect(asFragment()).toMatchSnapshot();
  });

  it.skip('clicking button triggers alert', () => {
    const { getByText } = render(<Home />, {});
    window.alert = jest.fn();
    fireEvent.click(getByText('Test Button'));
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest');
  });
});