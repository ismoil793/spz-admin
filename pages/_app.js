import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import { wrapper } from '../store/store';
import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import '../styles/bootstrap-grid.min.css';
import '../styles/globals.css';
import '../styles/main.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps, router } = props;

   return (
      <CacheProvider value={emotionCache}>
         <Head>
            <meta name='viewport' content='initial-scale=1, width=device-width' />
            <title>SPZ-Bearings | Admin Panel</title>
         </Head>
         <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <NextNProgress
               color='#fff'
               startPosition={0.3}
               stopDelayMs={200}
               height={3}
               showOnShallow={true}
            />
            {
               router.pathname !== '/login' ?
                  <Layout>
                     <Component {...pageProps} />
                  </Layout>
                  :
                  <Component {...pageProps} />
            }
         </ThemeProvider>
      </CacheProvider>
   );
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   emotionCache: PropTypes.object,
   pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp) /* connection of redux */