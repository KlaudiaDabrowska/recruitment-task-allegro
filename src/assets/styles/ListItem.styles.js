import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 120%;
  height: 12vh;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  border-radius: 20px;
  box-shadow: 24px 20px 45px -10px ${({ theme }) => theme.colors.backgroundTertiary};
`;

export const Number = styled.div`
  margin-right: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const RepoName = styled.h3`
  margin: 0 auto 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
`;

export const RepoUrl = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: italic;
  text-align: center;
  text-decoration: none;
  &:hover {
    opacity: 0.3;
  }
`;

export const RepoStar = styled.div`
  margin: 0.3rem 0.2rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  color: #b3a9a9;
  opacity: 0.7;
`;
