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
  SubTitle,
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
            안녕하세요,
            <br />
            저는 이용준이라고 합니다<Mark>.</Mark>
          </MainTitle>
          <MainDesc>
            서울에서 2년차 웹 프론트엔드 엔지니어로 일하고 있으며 기능 구현과
            아기자기한 UI 구현을 좋아합니다. 최근에는 인터랙티브한 웹에 관심이
            생겨, 애니메이션을 잘 다루기 위하여 노력하고 있습니다.
            <br />
            좋은 개발자란 단순히 개발만 잘하는 것이 아닌 팀과의 소통의 중요성을
            알고, 주변사람들에게 긍정적인 영향을 끼치는 개발자라고 생각합니다.
            좋은 동료들에게 자극받고 성장할 수 있으며, 능동적인 업무를 할 수
            있는 환경을 선호합니다.
          </MainDesc>
        </Section>
        <WorkExperience />
        <Skils />
        <OtherWorkExperience />
        <Section>
          <SubTitle>
            Contact<Mark>.</Mark>
          </SubTitle>
          <WorkList>
            <li>
              <Anchor href="mailto:chuck5732590@gmail.com">이메일</Anchor>
            </li>
            <li>
              <Anchor href="https://github.com/northfacegawd">깃허브</Anchor>
            </li>
          </WorkList>
        </Section>
      </MainLayout>
    </>
  );
};

export default IndexPage;
