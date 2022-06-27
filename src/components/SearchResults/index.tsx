import { useQuery } from '@apollo/client';
import React from 'react';
import { useDebounce } from 'use-debounce';
import searchRepositories from '../../lib/queries/searchRepository';
import { SearchResultItemEdge } from '../../lib/types/githubTypes';
import RepositoryItem from './RepositoryItem';

interface Props {
  searchTerm?: string;
}

const SearchResults = ({ searchTerm }: Props) => {
  const [debouncedSearchTerm] = useDebounce<String | undefined>(
    searchTerm,
    500
  );

  const { loading, error, data } = useQuery(searchRepositories, {
    variables: {
      search_term: debouncedSearchTerm,
    },
  });
  const repo_count = data?.search?.repositoryCount;

  if (loading && searchTerm) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: error</p>;
  }

  return (
    <div>
      {searchTerm && repo_count > 0 && <p>Total Results: {repo_count}</p>}
      {data?.search?.edges.map(({ node }: SearchResultItemEdge) => {
        if (!node?.id) {
          return;
        }
        return <RepositoryItem key={node.id} repository={node} />;
      })}
    </div>
  );
};

export default SearchResults;
