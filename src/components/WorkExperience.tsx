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
import Anchor from './Anchor';

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
              <time dateTime="2021-11">2022. 06</time> -{' '}
              <time dateTime="2021-12">2021. 07</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              ProBit Global의 서브 페이지이며 이벤트를 주최하거나 열려있는
              이벤트에 참가하여 퀴즈를 풀고 그에따른 보상을 받을 수 있는
              웹서비스인{' '}
              <Anchor href="https://www.probit.com/learn-and-earn">
                Learn & Earn
              </Anchor>
              을 개발하였습니다.
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>프론트엔드 기술환경 구성 및 기본 기능 구현</li>
              <li>Redux, Redux Saga를 사용한 스토어 디자인</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
              <li>웹뷰 환경에서 로그인 연동</li>
              <li>Jest 기반의 테스트 작성</li>
              <li>CI환경에서 테스트 자동화</li>
              <li>디자이너, 기확자와 협업하여 페이지 디자인 및 기능 수정</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, NextJS, Redux, Redux-Saga, SWR, axios,
              styled-components, GitLab, GitLab CI
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              회사 소개 페이지 개발<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2022-05">2022. 05</time> -{' '}
              <time dateTime="2022-05">2022. 05</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>DNSEver를 소개하는 페이지를 개발하였습니다.</WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>기술환경 구성</li>
              <li>반응형 웹으로 퍼블리싱</li>
              <li>다국어를 지원하기 위해 i18next, next-i18next 적용</li>
              <li>번역본 다운로드 자동화</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypesScript, React, NextJS, styled-jsx, i18next, next-i18next
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              ProBit Common Locales<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-11">2021. 11</time> -{' '}
              <time dateTime="2021-12">2021. 12</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              ProBit는 40개이상의 언어를 지원하므로 언어를 관리하기 위한
              라이브러리를 유지보수 및 최적화 하는 작업을 하였습니다.
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>
                webpack 마이그레이션을 통해 번들 사이즈 축소 및 tree shaking
                지원
              </li>
              <li>
                각 언어의 timezone name 파일을 dynamic import 형식으로 바꾸어서
                해당 라이브러리를 사용하는 모든 프로젝트 메인 번들 사이즈 축소,
                lazy load을 적용하여 초기 로딩시간 단축
              </li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>TypeScript, Webpack</WorkDesc>
          </Project>
          <Project>
            <WorkName>
              ProBit Global 웹 개발<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-6">2021. 06</time> - 현재
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              개발팀의 신입 팀원으로서 가상화폐 거래소 서비스인{' '}
              <Anchor href="https://www.probit.com">ProBit Global</Anchor>의
              프론트엔드를 개발했습니다. 기본적인 유지보수를 비롯해 비즈니스의
              요구에 맞는 다양한 새로운 기능을 개발하고 있습니다.
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>내부이체 기능 개발</li>
              <li>
                신용카드로 암호화폐를 구입할 수 있는 Buy Crypto 페이지 UI 개편
                및 사용자 편의성을 증대하기 위해 결제 결과 API를 폴링하는
                비즈니스 로직 개발
              </li>
              <li>
                Buy Crypto 기능에서 신규 프로바이더가 추가 되어도 대응될 수
                있도록 인터페이스 추상화
              </li>
              <li>
                자금세탁 방지를 위한 트래블룰 적용을 위해 개인 지갑주소 UI 개편
                및 주소 CRUD 기능 개발
              </li>
              <li>
                버그가 발생했을 시 치명적일 수 있는 출금 로직에 테스트 코드를
                적용하여 안정화
              </li>
              <li>
                안드로이드, IOS 앱에서 로그인 연동을 위해 웹뷰 작업 및 라우트
                가드 설정
              </li>
              <li>
                Moment.js 에서 Day.js로 마이그레이션 하여 번들 사이즈 축소
              </li>
              <li>디자이너, 기확자와 협업하여 페이지 디자인 및 기능 수정</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, Angular(v2+), Rxjs, Ngrx, SCSS, Dayjs, Karma
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              Help Center<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-11">2021. 01</time> -{' '}
              <time dateTime="2021-12">2021. 06</time>
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              공지사항 및 FAQ 페이지, 다국어를 지원하기 위해 해당 글들의
              번역본을 Google Drive를 통해 관리할 수 있는 백오피스 UI를
              개발하였습니다.
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>사용자, 관리자 프론트엔드 기술환경 구성 및 전체 기능 구현</li>
              <li>Redux, Redux Saga를 사용한 스토어 디자인</li>
              <li>
                React 기반 Presentational and Container 패턴을 사용하여 개발
              </li>
              <li>
                Google Drive api를 사용하여 번역본으로 관리하므로 Google Drive와
                같은 유저 인터페이스로 번역 관리 페이지 구현
              </li>
              <li>다국어 지원을 위해 i18next 적용</li>
              <li>디자이너, 기확자와 협업하여 페이지 디자인 및 기능 수정</li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, Redux, Redux Saga, styled-components, Antd,
              i18next, react-18next
            </WorkDesc>
          </Project>
          <Project>
            <WorkName>
              Cody On<Mark>.</Mark>
            </WorkName>
            <span className="time">
              <time dateTime="2021-11">2022. 10</time> - 현재 진행
            </span>
            <WorkTitle>
              Description<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              사용자의 패션 MBTI를 분석하고 그에따른 컬렉션 모음, 패션 명함을
              제작하는 웹 서비스인 코디은을 개발하고 있습니다. 창업을 염두해
              두고 진행하고 있지는 않으며 사이드 프로젝트로서 본업과는
              무관합니다.
            </WorkDesc>
            <WorkTitle>
              What did I do<Mark>.</Mark>
            </WorkTitle>
            <WorkList>
              <li>
                프론트엔드 기술환경 구성 및 명함 UI 개발 및 이미지로 다운로드
                기능 개발
              </li>
              <li>소셜 로그인 기능 개발</li>
              <li>React기반 컴포넌트 계층 구조 디자인</li>
              <li>
                고려대, 중앙대 학부생들과 함께 협업하여 기획, 디자인에 참여
              </li>
            </WorkList>
            <WorkTitle>
              Tech Stack<Mark>.</Mark>
            </WorkTitle>
            <WorkDesc>
              TypeScript, React, NextJS, TailwindCss, Jest, Vercel
            </WorkDesc>
          </Project>
        </RowRight>
      </Row>
    </Section>
  );
}
