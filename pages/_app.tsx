import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Head from '@components/common/Head';

// Inject global styles
import '@styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider
    disableTransitionOnChange
    forcedTheme={(Component as any).theme || undefined}
    attribute="class"
  >
    <Head />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
