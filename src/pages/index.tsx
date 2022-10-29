import React, { FC } from 'react';
import {
  MainDesc,
  MainLayout,
  MainTitle,
  Mark,
  Section,
  SubTitle,
} from '../styles/index.style';

const IndexPage: FC = function () {
  return (
    <MainLayout>
      <Section>
        <MainTitle>
          안녕하세요,
          <br />
          저는 이용준이라고 합니다<Mark>.</Mark>
        </MainTitle>
        <MainDesc>
          서울에서 2년차 웹 프론트엔드 엔지니어로 일하고 있으며 기능 구현과 .
          최근에는 인터랙티브한 웹에 관심이 생겨, 애니메이션 구현을 잘 다루기
          위하여 노력하고 있습니다.
          <br />
          좋은 개발자란 단순히 개발만 잘하는 것이 아닌 팀과의 소통의 중요성을
          알고, 주변사람들에게 긍정적인 영향을 끼치는 개발자라고 생각합니다.
          좋은 동료들에게 자극받고 성장할 수 있으며, 능동적인 업무를 할 수 있는
          환경을 선호합니다.
        </MainDesc>
      </Section>
      <Section>
        <SubTitle>
          Work Experience<Mark>.</Mark>
        </SubTitle>
      </Section>
    </MainLayout>
  );
};

export default IndexPage;
