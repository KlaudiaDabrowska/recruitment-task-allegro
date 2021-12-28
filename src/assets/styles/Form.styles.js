import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;
  max-width: 520px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 10px 20px 55px -10px ${({ theme }) => theme.colors.backgroundTertiary};
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const StyledField = styled(Field)`
  padding: 10px 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    box-shadow: 10px 20px 55px -10px ${({ theme }) => theme.colors.backgroundTertiary};
  }
`;
