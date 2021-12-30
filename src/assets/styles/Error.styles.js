import styled from 'styled-components';

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.error};
  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
