import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  margin-top: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.colorTertiary};
  border: 2px solid ${({ theme }) => theme.colors.colorTertiary};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.colorTertiary};
    opacity: 0.6;
  }
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    border-radius: 7px;
  }
  @media (max-width: 411px) {
    padding: ${({ theme }) => theme.spacing.xxs};
    margin: ${({ theme }) => theme.spacing.xxs};
  }
`;
