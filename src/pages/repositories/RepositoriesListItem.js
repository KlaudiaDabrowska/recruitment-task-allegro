import React from 'react';
import { Wrapper, Number, Description, RepoName, RepoUrl, RepoStar } from 'assets/styles/ListItem.styles';
import { StyledStar } from 'assets/styles/ListItem.styles';

export const ListItem = ({ item, index }) => {
  return (
    <Wrapper>
      <Number>#{index}</Number>
      <StyledStar />
      <RepoStar>{item.stargazers_count}</RepoStar>
      <Description>
        <RepoName>{item.name}</RepoName>
        <RepoUrl href={item.html_url}>{item.html_url}</RepoUrl>
      </Description>
    </Wrapper>
  );
};
