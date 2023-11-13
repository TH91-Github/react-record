import SwiperWrap from "component/common/SwiperWrap";
import { SwiperSlide } from "swiper/react";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import { colors } from "component/styled/common/Variable";
import CodeTemplate from "component/common/CodeTemplate";
import styled from "styled-components";

function GuideSwiper () {
  const SlideData = {
    title: "Swiper",
    desc:[
      "참고 : https://swiperjs.com/",
      "경로 : component/common/SwiperWrap",
      "Swiper 컴포넌트 : import SwiperWrap from 'component/common/SwiperWrap",
      "slideslide import : import { SwiperSlide } from 'swiper/react';",
      "설명 : Swiper 컴포넌트 사용 후 내부로 Swiper slide 사용.",
      "⚠️ slideItem 컴포넌트 제작 후 -> SwiperWrap 내부에 사용 시 동작이 되지 않는 오류로 인해 SwiperWrap, SwiperSlide 사용."
    ],
    code:`<SwiperWrap> // 제작 컴포넌트 \n  <SwiperSlide>슬라이드1</SwiperSlide> // swiper - SwiperSlide 사용 \n  <SwiperSlide>슬라이드2</SwiperSlide>\n  <SwiperSlide>슬라이드3</SwiperSlide>\n</SwiperWrap>`
  }
  const slideTestData = [
    {
      subTitle: "기본 default",
      desc:["영역 및 테스트 용도 - SwiperWrap 컴포넌트 빈 값"],
      code1:`<SwiperWrap></SwiperWrap>`,
    },
    {
      subTitle: "Custom - SwiperWrap 컴포넌트에 children으로 전달",
      desc:["swiper/react 에서 SwiperSlide를 불러와서 사용","swiperOpt로 옵션 데이터를 넘긴다."],
      code1:`<SwiperWrap swiperOpt={slideTest.opt}><SwiperSlide>필요한 구조 및 데이터</SwiperSlide></SwiperWrap>`,
      code2:`opt:{pagination: {clickable: true,},navigation: true} // 좌우 버튼 및 페이지 버튼`,
      slides:[
        "2번 슬라이드 1",
        "2번 슬라이드 2",
        "2번 슬라이드 3"
      ]
      ,
      opt:{pagination: {clickable: true,},navigation: true}
    },
    {
      subTitle: "navigation : 좌우 버튼",
      desc:["swiper 옵션 값 : navigation: true"],
      code1:`<SwiperWrap swiperOpt={slideTest.opt}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      code2:`opt:{navigation: true} // 옵션 navigation - 좌우 arrow 버튼`,
      slides:[
        "navigation : true 1",
        "navigation : true 2",
        "navigation : true 3"
      ]
      ,
      opt:{navigation: true}
    },
    {
      subTitle: "pagination : 하단 페이지 버튼",
      desc:["swiper 옵션 값 : pagination: true 생성", "추가로 clickable: true 하면 클릭 가능" ],
      code1:`<SwiperWrap swiperOpt={slideTest.opt}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      code2:`opt:{pagination: {clickable: true}} // 옵션 pagination - 하단 페이지 버튼 및 클릭 여부`,
      slides:[
        "pagination : true 1",
        "pagination : true 2",
        "pagination : true 3"
      ]
      ,
      opt:{pagination: {clickable: true}}
    },
    {
      subTitle: "Infinite loop",
      desc:["swiper 옵션 값 : loop: true 생성" ],
      code1:`<SwiperWrap swiperOpt={slideTest.opt}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      code2:`opt:{loop:true} // 옵션 loop - 루프/반복 여부`,
      slides:[
        "loop : true 1",
        "loop : true 2",
        "loop : true 3"
      ]
      ,
      opt:{loop:true}
    },
    {
      subTitle: "autoplay 자동 반복",
      desc:["swiper 옵션 값 : autoplay: {delay: 2000, disableOnInteraction:false} ","delay: 자동 재생 시간","disableOnInteraction: 스와이프 후 자동 재생 여부"],
      code1:`<SwiperWrap swiperOpt={slideTest.opt}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      code2:`opt:{autoplay:{delay: 2000, disableOnInteraction: false,}} // 옵션 autoplay - 자동  여부`,
      slides:[
        "autoplay : true 1",
        "autoplay : true 2",
        "autoplay : true 3"
      ],
      opt:{autoplay: {delay: 2000, disableOnInteraction:false,}}
    },
    {
      subTitle: "초기 함수 실행 Change",
      desc:["초기 실행 onInit={함수}", "swiper 처음 발생 시 이벤트 발생 값을 반환 받을 수 있다", "console 확인"],
      code1:`<SwiperWrap onInit={함수}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      slides:[
        "init Func 1",
        "init Func 2",
        "init Func 3"
      ],
      init: function initTest(e) {
        console.log("초기 실행 TEST")
        console.log(e)
      }
    },
    {
      subTitle: "스와이프 시 함수 실행 Change",
      desc:["스와이프 시 실행 onChange={함수}", "swiper onSlideChange 이벤트 발생 값을 반환 받을 수 있다", "console 확인"],
      code1:`<SwiperWrap onChange={함수}><SwiperSlide>입력 값</SwiperSlide></SwiperWrap>`,
      slides:[
        "change Func 1",
        "change Func 2",
        "change Func 3"
      ],
      change: function changeTest(e) {
        console.log("change TEST")
        console.log(e)
      }
    },
  ]
  
  return (
    <>
      <S.GuidDetailWrap>
        <SC.ContBoxInner>
          <S.GuideTitle>
            <TitleBar>{SlideData.title}</TitleBar>
          </S.GuideTitle>
          <S.GuideCont>
            <div className="guide__info">
              <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
              <div className="guide__info__desc">
                {
                  SlideData.desc.map((slideDesc,idx) => (
                    <S.GuideTxtBar key={idx}>
                      {slideDesc}
                    </S.GuideTxtBar>
                  ))
                }
              </div>
              <CodeTemplate text={SlideData.code}/>
              <div className="guide__list">
                {
                  slideTestData.map((slideTest, idx) => (
                    <S.GuideTest key={idx}>
                      <SubTitleBar>{idx+1}. {slideTest.subTitle}</SubTitleBar>
                      {
                        slideTest.desc.map((slideTestDesc,idx) => <S.GuideTestTxt key={idx}>{slideTestDesc}</S.GuideTestTxt>)
                      }
                      <CodeTemplate $tagColor showLineNumbers={false} text={slideTest.code1}/>
                      {slideTest.code2 && <CodeTemplate $side showLineNumbers={false} text={slideTest.code2}/> }
                      <S.GuideTestBox>
                        <SwiperWrap 
                          swiperOpt={slideTest.opt && slideTest.opt} 
                          onInit={slideTest.init && slideTest.init}
                          onChange={slideTest.change && slideTest.change}>
                          {
                            slideTest.slides &&
                            <>
                              {
                                slideTest.slides.map((slideInfo, idx) => {
                                  return <SwiperSlide key={idx}>
                                    <SlideBox>{slideInfo}</SlideBox>
                                  </SwiperSlide>
                                })
                              }
                            </>
                          }
                        </SwiperWrap>
                      </S.GuideTestBox>
                    </S.GuideTest>
                  ))
                }
              </div>
            </div>
          </S.GuideCont>
        </SC.ContBoxInner>
      </S.GuidDetailWrap>
    </>
  )
}
export default GuideSwiper;

export const SlideBox = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:250px;
  background:${colors.bgGreen};
  color:${colors.baseWhite};

`;