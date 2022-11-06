import React from 'react';
import {
  Mark,
  Project,
  Row,
  RowLeft,
  RowRight,
  Section,
  SubTitle,
  WorkDesc,
  WorkList,
  WorkName,
  WorkTitle,
} from '../styles/index.style';

export default function WorkExperience() {
  return (
    <Section>
      <SubTitle>
        Work Experience<Mark>.</Mark>
      </SubTitle>
      <Row>
        <RowLeft>
          <WorkName>
            DNSEver<Mark>.</Mark>
          </WorkName>
          <span className="role">Frontend Developer</span>
          <span className="role">
            <time dateTime="2020-12">2020. 12</time> - 현재
          </span>
        </RowLeft>
        <RowRight>
          <Project>
            <WorkName>
              Learn & Earn<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2022-06">2022. 06</time> -{' '}
              <time dateTime="2022-07">2022. 10</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              이벤트에 참가하여 퀴즈를 풀고 그에따른 보상을 받을 수 있는
              웹서비스인 Learn & Earn 을 개발
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>프론트 파트 전체 개발</li>
              <li>Redux, Redux Saga를 사용한 스토어 디자인</li>
              <li>웹뷰 환경에서 로그인 연동</li>
              <li>Jest 기반의 테스트 작성</li>
              <li>디자인, 기획, 마케팅과 협업하여 작업</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, NextJS, Redux, Redux-Saga, SWR,
              styled-components, Jest, RTL, GitLab, GitLab CI
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              ProBit Global 웹 개발<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-06">2021. 06</time> - 현재
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              가상화폐 거래소 서비스인 ProBit Global의 프론트엔드, 회사 소개
              페이지 개발
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>
                ProBit 이용자끼리 수수료 없이 거래할 수 있는 내부이체 기능 개발
              </li>
              <li>
                신용카드로 암호화폐를 구입할 수 있는 Buy Crypto 기능 비즈니스
                로직 리팩토링
              </li>
              <li>
                자금세탁 방지를 위한 트래블룰 적용을 위해 개인 지갑주소 UI 개편
                및 주소 CRUD 기능 개발
              </li>
              <li>
                출금 로직에 대한 테스트 커버리지를 70%이상 적용하여 안정화
              </li>
              <li>
                안드로이드, IOS 웹뷰 연동 및 도메인을 벗어나지 않도록 라우트
                가드 설정
              </li>
              <li>
                크롬에서 U2F 지원 중단 및 보안성 증가를 위해 2차인증의 종류인
                U2F를 WebAuthn으로 마이그레이션
              </li>
              <li>날짜 라이브러리를 마이그레이션하여 번들사이즈 3% 축소</li>
              <li>회사 소개 페이지 반응형으로 제작</li>
              <li>
                사내에서 사용하는 언어 목록 라이브러리에 Webpack을 적용하여 번들
                사이즈 축소{' '}
              </li>
              <li>
                Webpack + Babel을 통하여 같은 라이브러리를 사용하지만 다른
                모듈형식을 사용하는 프로젝트도 지원할 수 있게 대응
              </li>
              <li>
                언어 목록 라이브러리에서 제공하는 함수를 트리 셰이킹이
                가능하도록 리팩토링
              </li>
              <li>
                언어 목록 라이브러리에서 각 언어마다 사용하는 용량이 큰 타임존
                리스트 파일을 다이나믹 임포트를 통해 레이지 로드 구현. 해당
                구현으로 인해 메인 번들 사이즈 축소 및 언어 변경시에 그에 맞는
                파일만 가져오기 때문에 초기 로딩 시간 단축
              </li>
              <li>디자이너, 기확자와 협업하여 페이지 디자인 및 기능 수정</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, Angular, React, NextJS, RxJS, Ngrx, Jasmine, Karma,
              Webpack, GitLab, GitLab CI
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              Help Center<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-01">2021. 01</time> -{' '}
              <time dateTime="2021-06">2021. 06</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              공지사항 및 FAQ 페이지, 다국어를 지원하기 위해 해당 글들의
              번역본을 Google Drive를 통해 관리할 수 있는 백오피스 서비스를 개발
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>
                사용자, 관리자 프론트엔드 기술환경 구성 및 프론트 파트 전체 개발
              </li>
              <li>Redux, Redux Saga를 사용한 스토어 디자인</li>
              <li>
                React 기반 Presentational and Container 패턴을 사용하여 개발
              </li>
              <li>다국어 지원</li>
              <li>디자이너, 기확자와 협업하여 페이지 디자인 및 기능 수정</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, Redux, Redux Saga, styled-components, Antd,
              GitLab, GitLab CI
            </WorkDesc>
          </Project>
        </RowRight>
      </Row>
      <Row>
        <RowLeft>
          <WorkName>
            Side Projects<Mark>.</Mark>
          </WorkName>
        </RowLeft>
        <RowRight>
          <Project>
            <WorkName>
              Cody On<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2022-10">2022. 09</time> - 현재 진행
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              사용자의 패션 MBTI를 분석하고 그에따른 컬렉션 모음, 패션 명함을
              제작하는 웹 서비스 개발 (고려대 창업 경진대회 제출용)
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>프론트 파트 전체 개발 (비즈니스 로직 및 UI)</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
              <li>
                고려대, 중앙대 학부생들과 함께 협업하여 기획, 디자인에 참여
              </li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, NextJS, TailwindCSS, React Query, Prisma,
              Postgresql, Jest, RTL, Vercel
            </WorkDesc>
          </Project>
        </RowRight>
      </Row>
    </Section>
  );
}
