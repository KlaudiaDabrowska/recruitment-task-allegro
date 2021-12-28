import React from 'react';
import { Wrapper, Title } from '../../assets/styles/Header.styles';

export const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};
