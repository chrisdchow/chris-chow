import { FunctionComponent } from 'react';

type ParagraphProps = Record<string, unknown>;

/**
 * https://tailwindcss.com/docs/preflight
 * Paragraph tags are unstyled (normalized)
 */

export const P: FunctionComponent<ParagraphProps> = ({ children }) => {
  return <p className='my-2 whitespace-pre-wrap'>{children}</p>;
};
