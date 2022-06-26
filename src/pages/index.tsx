import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Intro from '../components/intro';
import Search from '../components/search';

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  return (
    <>
      <Head>
        <title>Naimuri - Github Search</title>
        <meta
          name="description"
          content="A search engine for github repositories"
        />
        <meta name="author" content="Tevon McCrea"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Search setSearchTerm={setSearchTerm} />
    </>
  );
}

export default Home
