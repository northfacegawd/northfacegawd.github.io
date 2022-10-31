import React from 'react';

import {
  Section,
  SubTitle,
  Mark,
  Other,
  WorkName,
  WorkList,
} from '../styles/index.style';

export default function Skils() {
  return (
    <Section>
      <SubTitle>
        Skills<Mark>.</Mark>
      </SubTitle>
      <Other>
        <WorkName>
          Overall<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>
            항상 최신의 기술이 옳다고 여기지 않습니다. 상황에 따라 적절한 선택이
            있다고 믿습니다.
          </li>
          <li>
            업무에 필요하다면 능숙한 분야가 아니더라도 적극적으로 탐색하여
            최적의 결과를 낼 수 있도록 노력합니다.
          </li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          Communication<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>
            적응하지 못 하는 동료가 있다면 나무라지 않고 최선을 다해서
            도와줍니다.
          </li>
          <li>커뮤니케이션은 적은 것보다는 많은게 좋다고 믿습니다.</li>
          <li>
            디자인, 기획, 마케팅 부서와의 협업 경험으로 인해 부서간 소통에도
            차질이 없습니다.
          </li>
          <li>협업툴로 Slack, 이슈 트래커로 Jira를 사용하고 있습니다.</li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          Web<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>
            Internet Explorer, Safari를 비롯한 다양한 크로스 부라우징 경험이
            있습니다.
          </li>
          <li>
            각 HTML태그가 무슨 의미를 갖는지 알고 적절히 배치할 수 있습니다.
          </li>
          <li>
            CSR, SSR의 개념을 및 장단점을 파악하여 적절하게 사용할 수 있습니다.
          </li>
          <li>SEO향상을 위해 메타태그를 적절하게 활용할 수 있습니다.</li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          JavaScript & TypeScript<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>JavaScript와 TypeScript에 능숙합니다.</li>
          <li>
            대부분의 코드를 TypeScript로 작성합니다. 작성한 코드를 Webpack,
            Babel을 통해 번들링 및 트랜스파일링 합니다.
          </li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          React<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>
            React hooks를 능숙하게 사용하고, 모든 컴포넌트를 함수로 만듭니다.
            hook을 이용해 공통 비즈니스 로직을 적절히 모듈화해 사용할 수
            있습니다.
          </li>
          <li>
            userCallback, useMemo, React.memo 등 최적화 함수에 대해서 이해하고
            적절한 상황에서만 사용합니다.
          </li>
          <li>Testing Library를 사용하여 테스트코드를 작성할 수 있습니다.</li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          NextJS<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>
            getServerSideProps, getStaticProps, getStaticPaths등 서버 함수에
            대해서 이해하고 적절한 상황에서 사용할 수 있습니다.
          </li>
          <li>
            Lazy Hydration 및 import를 통해 더 빠른 초기 로딩을 구현할 수
            있습니다.
          </li>
          <li>
            Server Side Rendering과 Static Site Generation 방식의 페이지 구현을
            적절하게 활용할 수 있습니다.
          </li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          Angular<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>Angular 모듈을 적절하게 분리하여 사용할 수 있습니다.</li>
          <li>
            공통된 로직 및 기능을 service, pipe, directive등으로 분리 및
            추상화하여 사용할 수 있습니다.
          </li>
          <li>Rxjs를 사용하여 비동기 로직을 수월하게 처리할 수 있습니다.</li>
          <li>Testing Library를 사용하여 테스트코드를 작성할 수 있습니다.</li>
        </WorkList>
      </Other>
      <Other>
        <WorkName>
          DevOps<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>GitHub Actions, GitLab CI 등의 CI를 구성할 수 있습니다.</li>
          <li>
            반복적인 업무 해소를 위해 테스트 자동화 및 Asset Upload 같은 작업을
            CI환경에서 할 수 있습니다.
          </li>
        </WorkList>
      </Other>
    </Section>
  );
}
