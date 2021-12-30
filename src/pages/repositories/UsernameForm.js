import React, { useEffect, useState } from 'react';
import { StyledForm, Label, StyledInput } from 'assets/styles/Form.styles';
import { Button } from 'assets/styles/Button.styles';
import { ValidationMessage } from './ErrorMessages';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

export const UsernameForm = ({ setUsername, username }) => {
  const [isUsernameCopied, setIsUsernameCopied] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    setUsername(values.username);
    navigate(`/repositories/${encodeURIComponent(values.username)}`);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username === '..' || values.username === '.') {
      errors.username = 'This sign is not allowed';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate,
    onSubmit,
  });

  useEffect(() => {
    if (isUsernameCopied) {
      return;
    }
    formik.values.username = username;
    setIsUsernameCopied(true);
  }, [formik.values, username, isUsernameCopied]);

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Label htmlFor="username">Enter your friend's user name on GitHub</Label>
      <StyledInput
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.username}
        validate={validate}
        validateOnChange={false}
      />
      {formik.errors.username ? <ValidationMessage error={formik.errors.username} /> : null}
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};
