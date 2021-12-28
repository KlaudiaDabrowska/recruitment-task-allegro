import React from 'react';
import { Wrapper, Number, Description, RepoName, RepoUrl, RepoStar } from 'assets/styles/ListItem.styles';
import { Star } from '@styled-icons/bootstrap';

export const ListItem = ({ item, index }) => {
  return (
    <Wrapper>
      <Number>#{index}</Number>
      <Star size="30" color="#b3a9a9" />
      <RepoStar>{item.stargazers_count}</RepoStar>
      <Description>
        <RepoName>{item.name}</RepoName>
        <RepoUrl href={item.html_url}>{item.html_url}</RepoUrl>
      </Description>
    </Wrapper>
  );
};
