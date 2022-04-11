import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import Head from '@components/common/Head';

// Inject global styles
import '@styles/main.css';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <SessionProvider session={session}>
    <ThemeProvider
      disableTransitionOnChange
      forcedTheme={(Component as any).theme || undefined}
      attribute="class"
    >
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  </SessionProvider>
);

export default MyApp;
