import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Skils from '../components/Skills';
import OtherWorkExperience from '../components/OtherWorkExperience';
import WorkExperience from '../components/WorkExperience';
import {
  MainDesc,
  MainLayout,
  MainTitle,
  Mark,
  Section,
  WorkList,
} from '../styles/index.style';
import Anchor from '../components/Anchor';

const IndexPage: FC = function () {
  return (
    <>
      <Helmet>
        <title>이용준 - 이력서</title>
        <meta
          name="description"
          content="이것 저것 배우고 만들어보는 것을 좋아하는 웹 프론트엔드 개발자 이용준입니다. 제 이력 및 경력을 기술해놓은 이력서입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Helmet>
      <MainLayout>
        <Section>
          <MainTitle>
            안녕하세요 이용준이라고 합니다<Mark>.</Mark>
          </MainTitle>
          <WorkList
            style={{
              display: 'flex',
              columnGap: '2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <li>
              E-mail:{' '}
              <Anchor href="mailto:chuck5732590@gmail.com">
                chuck5732590@gmail.com
              </Anchor>
            </li>
            <li>
              Github:{' '}
              <Anchor href="https://www.github.com/northfacegawd">
                northfacegawd
              </Anchor>
            </li>
            <li>Phone: 010-9341-6751</li>
          </WorkList>
          <MainDesc>
            2년차 웹 프론트엔드 엔지니어로 일하고 있으며 리팩토링과 클린 코드를
            좋아합니다. 최근에는 인터랙티브한 웹에 관심이 생겨, 애니메이션을 잘
            다루기 위하여 스터디 및 개인 블로그에 직접 적용해보고 있습니다.
            <br />
            좋은 개발자란 단순히 개발만 잘하는 것이 아닌 팀과의 소통의 중요성을
            알고, 주변사람들에게 긍정적인 영향을 끼치는 개발자라고 생각합니다.
          </MainDesc>
        </Section>
        <WorkExperience />
        <Skils />
        <OtherWorkExperience />
      </MainLayout>
    </>
  );
};

export default IndexPage;
