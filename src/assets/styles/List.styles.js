import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.button`
  align-self: flex-start;
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

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
