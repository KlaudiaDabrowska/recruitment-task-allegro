import React from 'react';
import { ListItem } from './RepositoriesListItem';
import { Wrapper } from 'assets/styles/List.styles';
import Loader from 'react-loader-spinner';
import { AlertMessage } from './ErrorMessages';

export const RepositoriesList = ({ data, isLoading, errorMessage, isEmpty }) => {
  return isLoading ? (
    <Loader type="Oval" color="#a58eaf" height={80} width={80} />
  ) : errorMessage ? (
    <AlertMessage error={errorMessage} />
  ) : isEmpty ? (
    <AlertMessage error={`This user has no repository`} />
  ) : (
    <Wrapper>
      {data.map((item, index) => (
        <ListItem item={item} index={index + 1} key={item.id} />
      ))}
    </Wrapper>
  );
};
