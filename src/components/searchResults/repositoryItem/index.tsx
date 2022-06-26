import Link from 'next/link';
import React from 'react';

interface Props {
  repository: any;
}

const RepositoryItem = ({ repository }: Props) => {
  const {
    name,
    description,
    owner: { login },
    primaryLanguage,
    forkCount,
    issues,
    stargazers: { totalCount },
  } = repository;
	return (
    <>
      <article>
        <Link href={`/${login}/${name}`}>
          <a>{name}</a>
        </Link>
        <p>stars:{totalCount}</p>
        <p>forks:{forkCount}</p>
        <p>language:{primaryLanguage?.name}</p>
        <p>issues:{issues.totalCount}</p>
        <p>user: {login}</p>
        <p>forkCount: {forkCount}</p>
        {description && <p>{description}</p>}
      </article>
    </>
  );
};

export default RepositoryItem;
