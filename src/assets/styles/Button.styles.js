import styled from 'styled-components';

export const Button = styled.button`
  padding: 7px 20px;
  margin: 15px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.backgroundTertiary};
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  color: ${({ theme }) => theme.colors.backgroundTertiary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
