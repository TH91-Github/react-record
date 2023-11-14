import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import CodeTemplate from "component/common/CodeTemplate";
import TabBtn from "component/common/TabBtn";
import Paginate from "component/common/Paginate";

function GuidePaginate () {
  const GuideData = {
    title: "Tab",
    desc:[
      "경로 : component/common/Paginate",
      "Tab 컴포넌트 : import Paginate from 'component/common/Paginate",
      "설명 : Paginate 컴포넌트 사용 - 데이터 및 이벤트 props(propsOpt, propsEvent) 전달",
      "propsOpt={total, num, cutNum} 👉 총 번호(Ex:255), 현재 번호(Ex: 1), 보여지는 번호 수(Ex: 1~10)",
      "propsEvent : 현재 선택한 값을 반환하여 받는다."
    ],
    code:`<Paginate></Paginate>`
  }
  const GuideTestData = [
    {
      subTitle: "기본 default",
      desc:["영역 및 테스트 용도 - Paginate 컴포넌트 빈 값"],
      code1:`<Paginate />`,
    },
    {
      subTitle: "기본 default",
      desc:["영역 및 테스트 용도 - Paginate 컴포넌트 빈 값"],
      code1:`<Paginate propsOpt={opt} />`,
      code2:`opt: {total:13, num:5, cutNum:10} // {최종 값, 현재 값, Ex: 1~10개 단위로 보여지기}`,
      opt:{total:13, num:5, cutNum:10}
    },
    {
      subTitle: "기본 default",
      desc:["영역 및 테스트 용도 - Paginate 컴포넌트 빈 값"],
      code1:`<Paginate propsOpt={opt} propsEvent={eventFunc}/>`,
      code2:`opt: {total:5, num:2, cutNum:10} // 컷 수 보다 total이 많을 경우 `,
      opt:{total:5, num:2, cutNum:10},
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
            <TitleBar>{GuideData.title}</TitleBar>
          </S.GuideTitle>
          <S.GuideCont>
            <div className="guide__info">
              <SubTitleBar $fontSize="16px">설명 참고</SubTitleBar>
              <div className="guide__info__desc">
                {
                  GuideData.desc.map((guideDesc,idx) => (
                    <S.GuideTxtBar key={idx}>
                      {guideDesc}
                    </S.GuideTxtBar>
                  ))
                }
              </div>
              <CodeTemplate text={GuideData.code}/>
              <div className="guide__list">
                {
                  GuideTestData.map((guideTest, idx) => (
                    <S.GuideTest key={idx}>
                      <SubTitleBar>{idx+1}. {guideTest.subTitle}</SubTitleBar>
                      {
                        guideTest.desc.map((guideTestDesc,idx) => <S.GuideTestTxt key={idx}>{guideTestDesc}</S.GuideTestTxt>)
                      }
                      <CodeTemplate $tagColor showLineNumbers={false} text={guideTest.code1}/>
                      {guideTest.code2 && <CodeTemplate $side showLineNumbers={false} text={guideTest.code2}/> }
                      <S.GuideTestBox>
                        <Paginate 
                          propsOpt={guideTest.opt && guideTest.opt}
                          propsEvent={guideTest.change && guideTest.change} />
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
export default GuidePaginate;
