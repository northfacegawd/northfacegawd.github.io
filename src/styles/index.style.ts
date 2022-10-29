import styled from 'styled-components';

export const MainLayout = styled.div`
  max-width: 50rem;
  margin: auto;
  width: 100%;
`;

export const Section = styled.section`
  padding: 0 2rem;
`;

export const MainTitle = styled.h1`
  font-size: 4rem;
  margin: 0.65em 0;
  line-height: 1.1;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 4rem;
  margin: 4rem 0 2rem;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const Mark = styled.span`
  color: var(--primary-color-1000);
`;

export const MainDesc = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 500;
  margin: 0 0 1rem;
  @media (max-width: 900px) {
    font-size: 1.3rem;
  }
`;
