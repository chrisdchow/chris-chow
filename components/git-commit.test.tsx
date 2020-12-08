import React from 'react';
import { GitCommit } from '@models/git-commit';
import { render } from '@test/test-utils';
import { GitCommitCard } from './git-commit-card';

describe('Git Commit Card', () => {
  it('matches snapshot', () => {
    const commit = {} as GitCommit;

    const { asFragment } = render(<GitCommitCard gitCommit={commit} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
