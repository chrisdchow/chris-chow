import { FunctionComponent } from 'react';

type HeadingProps = Record<string, unknown>;

/**
 * https://tailwindcss.com/docs/preflight
 * Headings are unstyled (normalized)
 */

const baseHeadingStyle = 'font-bold leading-loose my-4 mx-0';

export const H1: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h1 className={`${baseHeadingStyle} text-3xl`}>{children}</h1>;
};

export const H2: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h2 className={`${baseHeadingStyle} text-2xl`}>{children}</h2>;
};

export const H3: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h3 className={`${baseHeadingStyle} text-xl`}>{children}</h3>;
};

export const H4: FunctionComponent<HeadingProps> = ({ children }) => {
  return <h4 className={`${baseHeadingStyle} text-l`}>{children}</h4>;
};
