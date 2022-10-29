import React, { FC } from 'react';
import styled from 'styled-components';

const MainLayout = styled.div`
  max-width: 50rem;
  margin: auto;
  width: 100%;
`;

const IndexPage: FC = function () {
  return <MainLayout></MainLayout>;
};

export default IndexPage;
