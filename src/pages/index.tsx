import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naimuri - Github Search</title>
        <meta name="description" content="A search engine for github repositories" />
         <meta name="author" content="Tevon McCrea"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default Home
