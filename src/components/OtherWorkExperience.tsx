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
        <WorkDesc>
          6개월간 웹 기초 (HTML, CSS, JavaScript), 자바, JSP, Spring
          Framework(legacy) 수업을 받으며 기본적인 웹 지식 및 웹 어플리케이션
          제작에 대한 이해를 갖추었습니다.
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
