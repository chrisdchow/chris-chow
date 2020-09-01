import React from 'react';
import { render } from '@test/test-utils';
import { Post } from './post';

describe('Post compnent', () => {
  it('matches snapshot', () => {
    const postData = {
      id: 'testPost',
      date: '2020-01-02',
      title: 'Test Post',
      contentHtml: '',
    };
    const { asFragment } = render(<Post postData={postData} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
