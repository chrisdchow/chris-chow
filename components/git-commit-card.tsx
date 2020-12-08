import { GitCommit } from '@models/git-commit';
import { Date } from '@components/elements/date';
import { P } from '@components/elements/paragraph';
import Link from 'next/link';

import React, { FunctionComponent } from 'react';

type GitCommitProps = {
  gitCommit: GitCommit;
};

/**
 * [[{commitHash}] {commitMessage}    ]
 * [{commitDate}                      ]
 * ------------------------------------
 * [{commitBody, contains newlines}   ]
 */
export const GitCommitCard: FunctionComponent<GitCommitProps> = ({ gitCommit }) => {
  const { message, hash, date, body } = gitCommit;
  return (
    <div className='bg-blue-50 shadow rounded-lg'>
      <div className='px-4 py-4'>
        <Link href={`https://github.com/chrisdchow/chris-chow/commit/${hash}`}>
          <a>
            [{hash.slice(0, 7)}] {message}
          </a>
        </Link>
        <div className='text-sm'>
          <Date dateString={date} pattern='Pp'></Date>
        </div>
        <p className='mt-1 text-sm text-gray-500'></p>
      </div>
      {body && (
        <div className='border-t border-gray-200 bg-gray-50 px-4 py-1'>
          <P>{body}</P>
        </div>
      )}
    </div>
  );
};
