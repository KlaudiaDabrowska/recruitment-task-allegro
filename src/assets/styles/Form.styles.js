import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: 40px 40px 0px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 25px;
  box-shadow: 10px 20px 55px -10px ${({ theme }) => theme.colors.colorTertiary};
  @media (max-width: 540px) {
    width: 80%;
  }
  @media (max-width: 411px) {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  text-align: center;
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: 10px 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;

  &:focus {
    outline: none;
    box-shadow: 7px 6px 20px ${({ theme }) => theme.colors.colorTertiary};
  }
`;
