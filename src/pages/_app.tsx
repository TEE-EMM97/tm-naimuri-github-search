import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/ApolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
