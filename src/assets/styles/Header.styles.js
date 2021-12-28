import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.m};
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
`;
