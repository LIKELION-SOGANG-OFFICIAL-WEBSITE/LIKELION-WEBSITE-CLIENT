import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Space from '../../util/Space';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
gsap.registerPlugin(TextPlugin);
function SecondSection() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);

  return (
    <SeondWholeSection>
      <Space height={'40rem'} />
      <div className="sticky">
        <p>
          멋쟁이사자처럼 대학은 국내외 <span>121개 </span>대학이 참여하는{' '}
          <span>국내 최대 규모의 IT 창업 동아리</span>입니다.
        </p>
      </div>
      <Space height={'50vh'} />
      <div className="sticky">
        <p>
          <span>“내 아이디어를 내 손으로 실현한다”</span>는 모토로,
          <br /> 누구든지 자신이 원하는 IT 서비스를 구현할 수 있도록 <br />
          각종 스터디와 네트워킹, 행사를 지원하고 있습니다.
        </p>
      </div>
      <Space height={'50vh'} />
      <div className="sticky final-sticky">
        <section className="change-text">
          <div className="small-text">THEN, WHAT ABOUT</div>
          <div className="logo-text">
            Like<span>lion</span> So<span>gang</span>
          </div>
          <Space height={'8.6rem'} />
          <div className="show-text">
            멋쟁이사자처럼 서강대학교는 대면 교육 세션, 데모데이 등 다채로운
            활동을 통해
            <br /> 매년 구성원들의 <strong>폭발적인 성장</strong>을 이끌어내고
            있습니다.
          </div>
          <Space height={'1rem'} />
          <div className="show-text">
            그 성과로, 대학생 1500명이 참여한 작년 ‘멋쟁이사자처럼 전국 연합
            해커톤’에서 <br />
            <strong>동상 수상 팀을 배출</strong>했습니다.
          </div>
        </section>
      </div>
      <Space height={'8.6rem'} />
    </SeondWholeSection>
  );
}

const SeondWholeSection = styled.section`
  background-color: white;
  .sticky {
    height: 150vh;
  }
  .final-sticky {
    height: 200vh;
  }
  section.change-text {
    position: sticky;
    top: 30vh;
  }
  .small-text {
    color: var(--Main, #000);
    text-align: center;
    font-family: Figtree;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  .show-text {
    color: var(--Main, #000);
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: capitalize;
  }
  .logo-text {
    font-family: 'PP-Editorial';
    font-size: 6.4rem;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }
  .logo-text span {
    font-style: italic;
  }
  p {
    position: sticky;
    top: 40vh;
    color: black;
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    line-height: normal;
    font-weight: 500;
    line-height: 140%;
    text-transform: capitalize;
    span {
      font-weight: 700;
    }
  }
`;

export default SecondSection;
