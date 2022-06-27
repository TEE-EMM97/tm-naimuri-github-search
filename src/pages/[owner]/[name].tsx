import Image from 'next/image';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Markdown from 'markdown-to-jsx';
import client from '../../lib/ApolloClient'
import repositoryDetails from '../../lib/queries/repositoryDetails';
import { Repository } from '../../lib/types/githubTypes';
import styles from './index.module.scss'
import Link from 'next/link';

interface ParamsProps {
  data: Repository & any;
  owner: string;
  name: string;
}

interface IParams extends ParsedUrlQuery {
  owner: string;
  name: string;
}

const RepositoryDetails = ({ data, owner, name }: ParamsProps) => {
  const {
    description,
    isArchived,
    homepageUrl,
    stargazerCount,
    forkCount,
    issues,
    watchers,
    openGraphImageUrl,
    readme,
  } = data || {};
  return (
    <div className={styles.card}>
      <Head>
        <title>
          {owner}/{name}:{description}
        </title>
      </Head>
      {isArchived && (
        <p>
          This repository has been archived by the owner. It is now read-only.
        </p>
      )}
          {openGraphImageUrl && (
            <Image
              src={openGraphImageUrl}
              width="200"
              height="200"
              alt="open graph image"
            />
          )}
          <h1>
            <span>
              {owner}/{name}
            </span>
          </h1>
          <div>
            <div>
              <p>{description}</p>
              <a href={homepageUrl} target="_blank" rel="noreferrer">
                {homepageUrl}
              </a>
              <div className={styles.meta}>
                <p>Stars: {stargazerCount}</p>
                <p>Watchers:{watchers?.totalCount}</p>
                <p>Forks: {forkCount}</p>
              </div>
            </div>

            <div>
              {readme?.text && (
                <div>
                  <Markdown>{readme.text}</Markdown>
                </div>
              )}
            </div>
            <div className={styles.navigate}>
				  <Link href='/'>
				  	<a>Go home</a>
				  </Link>
            </div>
          </div>
    </div>
  );
};

export default RepositoryDetails;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { owner, name } = params as IParams;

  const { data } = await client.query({
    query: repositoryDetails,
    variables: { owner, name },
  });

  return {
    props: {
      data: data?.repository,
      owner,
      name,
    },
  };
};
