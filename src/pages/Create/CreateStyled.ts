import styled from 'styled-components';

export const CreateSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoInked = styled.img`
  width: 35%;

  @media (min-width: 768px) {
    width: 15%;
  }

  @media (min-width: 1440px) {
    width: 17%;
  }
`;

export const InfoCreated = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-m);
  text-align: center;
`;

export const GoToHome = styled.p`
  font-family: var(--font-family-inter-medium);
  font-size: var(--font-size-s);
  color: var(--color-font-auth);
`;

export const ErrorInfo = styled.p``;
