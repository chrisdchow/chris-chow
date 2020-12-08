import { FunctionComponent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { H1, H2 } from '@components/elements/heading';

const name = 'Chris Chow';
export const siteTitle = name;

type LayoutProps = {
  home?: boolean;
};

export const Layout: FunctionComponent<LayoutProps> = ({ home, children }): JSX.Element => {
  const homeHeader = (
    <>
      <img src='/images/profile.jpg' className='h-32 w-32 rounded-full' alt={name} />
      <H1>{name}</H1>
    </>
  );

  const navigateHomeHeader = (
    <>
      <Link href='/'>
        <a>
          <img src='/images/profile.jpg' className='h-32 w-32 rounded-full' alt={name} />
        </a>
      </Link>
      <H2>
        <Link href='/'>
          <a>{name}</a>
        </Link>
      </H2>
    </>
  );

  return (
    <div className='max-w-xl py-0 px-4 mx-auto my-12'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Chris Chow' />
        <meta property='og:image' content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png`} />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className='flex flex-col items-center'>{home ? homeHeader : navigateHomeHeader}</header>
      <main>{children}</main>
      {!home && (
        <div className='mt-12 mx-0 mb-0'>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};
