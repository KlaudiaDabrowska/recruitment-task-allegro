import React from 'react';
import { StyledForm, Label, StyledField } from 'assets/styles/Form.styles';
import { Button } from 'assets/styles/Button.styles';
import { StyledErrorMessage } from './ErrorMessage';
import { Formik, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { Header } from 'components/common/Header';

const initialValues = {
  userName: '',
};

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'Required';
  } else if (values.userName.length <= 2) {
    errors.userName = 'Must be more characters';
  }
  return errors;
};

export const UserNameForm = () => {
  const onSubmit = (values) => {
    console.log(values.userName);
  };

  return (
    <>
      <Header title={`Check out your friends' repositories`} />
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <StyledForm>
          <Label htmlFor="userName">Enter your friend`s user name on GitHub</Label>
          <StyledField id="userName" name="userName" type="text" />
          <ErrorMessage name="userName" render={(msg) => <StyledErrorMessage error={msg} />}></ErrorMessage>
          <Link to="/repositories">
            <Button type="submit">Submit</Button>
          </Link>
        </StyledForm>
      </Formik>
    </>
  );
};
