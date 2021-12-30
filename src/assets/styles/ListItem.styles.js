import styled from 'styled-components';
import { Star } from '@styled-icons/bootstrap';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  width: 120%;
  height: 12vh;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.m};
  border-radius: 20px;
  box-shadow: 24px 20px 45px -10px ${({ theme }) => theme.colors.colorTertiary};
  @media (max-width: 540px) {
    width: 90%;
    box-shadow: 14px 20px 45px -10px ${({ theme }) => theme.colors.colorTertiary};
  }
`;

export const Number = styled.div`
  margin-right: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  @media (max-width: 840px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
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
  @media (max-width: 1050px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 840px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
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
  @media (max-width: 1050px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (max-width: 840px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const RepoStar = styled.div`
  margin: 0.3rem 0.2rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  color: ${({ theme }) => theme.colors.colorStar};
  opacity: 0.7;
  @media (max-width: 1050px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: 840px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  @media (max-width: 411px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledStar = styled(Star)`
  width: 30px;
  color: ${({ theme }) => theme.colors.colorStar};
  @media (max-width: 840px) {
    width: 23px;
  }
  @media (max-width: 411px) {
    width: 15px;
  }
`;
