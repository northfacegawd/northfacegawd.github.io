import React from 'react';
import {
  Section,
  SubTitle,
  Mark,
  Other,
  WorkName,
  WorkList,
} from '../styles/index.style';

export default function OtherWorkExperience() {
  return (
    <Section>
      <SubTitle>
        Other Experiences<Mark>.</Mark>
      </SubTitle>
      <Other>
        <WorkName>
          교육이력<Mark>.</Mark>
        </WorkName>
        <span className="role">
          KG IT BANK - 프레임워크 기반 자바 웹 개발자 양성
        </span>
        <span className="time">
          <time dateTime="2020-04">2020. 04.</time> -{' '}
          <time dateTime="2020-10">2020. 10.</time>
        </span>
        <span className="role">발명미디어학과(정보통신학과)</span>
        <span className="time">
          <time dateTime="2016-03">2016. 03.</time> -{' '}
          <time dateTime="2019-01">2019. 01.</time>
        </span>
      </Other>
      <Other style={{ borderBottom: 'none' }}>
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
