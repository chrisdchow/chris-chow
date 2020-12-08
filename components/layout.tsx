import { FunctionComponent } from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '@styles/utils.module.css';
import Link from 'next/link';

const name = 'Chris Chow';
export const siteTitle = name;

type LayoutProps = {
  home?: boolean;
};

export const Layout: FunctionComponent<LayoutProps> = ({
  home,
  children,
}): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Chris Chow' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src='/images/profile.jpg'
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <img
                  src='/images/profile.jpg'
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};
