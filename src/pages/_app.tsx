import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import theme from 'theme';
import 'config/i18n';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
