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
    id:1,
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
      subTitle: "사용 - SwiperWrap 컴포넌트에 children으로 전달",
      desc:["영역 및 테스트 용도 - SwiperWrap 컴포넌트 빈 값"],
      code1:`<SwiperWrap><SwiperSlide>필요한 구조 및 데이터</SwiperSlide></SwiperWrap>`,
      code2:`opt:{pagination: {clickable: true,},navigation: true}`,
      slides:[
        "테스트입니다 1",
        "테스트입니다 2",
        "테스트입니다 3"
      ]
      ,
      opt:{pagination: {clickable: true,},navigation: true}
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
                        <SwiperWrap swiperOpt={slideTest.opt}>
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
  border:1px solid ${colors.green};
  color:${colors.textColor};
`;