import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// Inject global styles
import '@styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider
    disableTransitionOnChange
    forcedTheme={(Component as any).theme || undefined}
    attribute="class"
  >
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
