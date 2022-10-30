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

export const Row = styled.div`
  display: flex;
  padding: 3rem 0;
  border-bottom: 1px solid var(--primary-color-500);
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const RowLeft = styled.div`
  flex-basis: 18rem;
  padding-right: 1rem;
  flex-shrink: 0;
  @media (max-width: 900px) {
    flex-basis: 100%;
    padding-right: 0;
    padding-bottom: 1rem;
  }
`;

export const RowRight = styled.div`
  flex-grow: 1;
`;

export const WorkName = styled.h3`
  font-size: 2rem;
  margin: 0 0 1rem;
`;

export const WorkTitle = styled.h5`
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  color: #333;
`;

export const WorkDesc = styled.p`
  margin: 0 0 1rem;
  font-size: 1.1rem;
  line-height: 1.4;
`;

export const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  font-size: 1.1rem;
  li {
    position: relative;
    padding: 0.2rem 0 0.2rem 1rem;
    &::before {
      position: absolute;
      left: 0;
      display: inline-block;
      content: '•';
      color: var(--primary-color-1000);
    }
  }
`;

export const Project = styled.div`
  &:first-of-type {
    padding-top: 0;
  }
  padding: 1.5rem 0;
`;

export const Other = styled.div`
  padding: 3rem 0;
  border-bottom: 1px solid var(--primary-color-500);
`;
