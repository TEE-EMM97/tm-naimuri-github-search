import React, { Dispatch, SetStateAction, SyntheticEvent, useRef } from 'react';

interface Props {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const Search = ({ setSearchTerm }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const currentSearchTerm = target.search.value;
	setSearchTerm(currentSearchTerm);
	console.log(currentSearchTerm)
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" placeholder="Try searching for nextjs" name="search" />
    </form>
  );
};

export default Search;
