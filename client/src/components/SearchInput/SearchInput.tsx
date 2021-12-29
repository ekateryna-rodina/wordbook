import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { input } from '../../features/search/search-slice';

const SearchInput = () => {
  const value = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const inputSearchHandler = (value: string) => {
    dispatch(input(value));
  };
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => inputSearchHandler(e.target.value)}
      data-testid="search-input-testid"
    ></input>
  );
};

export default SearchInput;
