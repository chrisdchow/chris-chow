import { FunctionComponent } from 'react';

export const NotFound: FunctionComponent<Record<string, never>> = () => {
  return <h1>404 - Page Not Found</h1>;
};
