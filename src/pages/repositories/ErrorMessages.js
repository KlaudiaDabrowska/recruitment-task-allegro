import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Error } from 'assets/styles/Error.styles';

export const ValidationMessage = ({ error }) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <Alert variant="outlined" severity="error">
        {error}
      </Alert>
    </Stack>
  );
};

export const AlertMessage = ({ error }) => {
  return <Error> {error}</Error>;
};
