import React from 'react';
import { ListItem } from './ListItem';
import { Wrapper, LoaderWrapper, BackButton } from 'assets/styles/List.styles';
import { FetchData } from 'pages/mainView/Fetch';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Header } from 'components/common/Header';

export const List = () => {
  const { error, isLoading, repos } = FetchData();
  const handleClick = () => {};
  const sortRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return isLoading ? (
    <LoaderWrapper>
      <Loader type="Oval" color="#a58eaf" height={80} width={80} />
    </LoaderWrapper>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <Wrapper>
      <Header title={`All repositories`} />
      <Link to="/">
        <BackButton onClick={handleClick}>Back to form</BackButton>
      </Link>
      {sortRepos.map((item, index) => (
        <ListItem item={item} index={index + 1} key={item.id} />
      ))}
    </Wrapper>
  );
};
