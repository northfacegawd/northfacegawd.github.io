import React from 'react';
import {
  Section,
  SubTitle,
  Mark,
  Other,
  WorkName,
  WorkList,
  WorkDesc,
} from '../styles/index.style';
import Anchor from './Anchor';

export default function OtherWorkExperience() {
  return (
    <Section>
      <SubTitle>
        Other Experiences<Mark>.</Mark>
      </SubTitle>
      <Other>
        <WorkName>
          Blog<Mark>.</Mark>
        </WorkName>
        <WorkDesc>
          <Anchor href="https://www.yongjun-blog.com/">ZUN</Anchor>
          이라는 이름의 개인 블로그를 운영하고 있습니다. 아직 개발단계에 있으며,
          제가 새롭게 배우게 된 내용 등을 글로 작성해 공유 할 예정입니다.
          블로그는 NextJS와 TailwindCss, Vercel을 사용해 구현했습니다
        </WorkDesc>
      </Other>
      <Other>
        <WorkName>
          삼일공업고등학교<Mark>.</Mark>
        </WorkName>
        <span className="role">발명미디어학과(정보통신학과)</span>
        <span className="time">
          <time dateTime="2016-03">2016. 03.</time> -{' '}
          <time dateTime="2019-01">2019. 01.</time>
        </span>
        <WorkDesc>
          미디어(정보통신)과에서 3년간 공부하며 네트워크, 통신에 대한 기본적인
          지식을 갖추었습니다.
        </WorkDesc>
      </Other>
      <Other>
        <WorkName>
          자격증<Mark>.</Mark>
        </WorkName>
        <WorkList>
          <li>정보처리 산업기사</li>
          <li>네트워크 관리사 2급</li>
          <li>정보기기 운용 기능사</li>
          <li>통신선로 기능사</li>
        </WorkList>
      </Other>
    </Section>
  );
}
