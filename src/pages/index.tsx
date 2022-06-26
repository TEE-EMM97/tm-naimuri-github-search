import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import Intro from '../components/Intro';
import Search from '../components/Search';
import SearchResults from '../components/SearchResults';

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
      <SearchResults searchTerm={searchTerm}/>
    </>
  );
}

export default Home
