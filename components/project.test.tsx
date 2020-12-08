import React from 'react';
import { Project } from '@models/project';
import { render } from '@test/test-utils';
import { Project as ProjectPage } from './project';

describe('Project page', () => {
  it('matches snapshot', () => {
    const project = {} as Project;

    const { asFragment } = render(<ProjectPage project={project} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
