import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const StyledErrorMessage = ({ error }) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <Alert variant="outlined" severity="error">
        {error}
      </Alert>
    </Stack>
  );
};
