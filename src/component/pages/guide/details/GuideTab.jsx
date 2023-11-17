import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
import CodeTemplate from "component/common/CodeTemplate";
import TabBtn from "component/common/TabBtn";

function GuideTab () {
  const GuideData = {
    title: "Tab",
    desc:[
      "경로 : component/common/TabBtn",
      "Tab 컴포넌트 : import TabBtn from 'component/common/TabBtn",
      "설명 : TabBtn 컴포넌트 사용 - 데이터 및 이벤트 props(propsList, propsEvent) 전달"
    ],
    code:`<TabBtn></TabBtn>`
  }
  const GuideTestData = [
    {
      subTitle: "기본 default",
      desc:["영역 및 테스트 용도 - TabBtn 컴포넌트 빈 값"],
      code1:`<TabBtn></TabBtn>`,
    },
    {
      subTitle: "탭 메뉴 리스트 데이터 전달",
      desc:["propsList로 탭 버튼을 전달한다."],
      code1:`<TabBtn propsList={tabs} />`,
      code2:`tabs:["탭 메뉴1", "탭 메뉴2", "탭 메뉴3"]`,
      tabs:[
        "탭 메뉴1",
        "탭 메뉴2",
        "탭 메뉴3"
      ]
    },
    {
      subTitle: "탭 메뉴 클릭 시 반응하기",
      desc:["propsEvent 필요 함수 전달"],
      code1:`<TabBtn propsEvent={click} />`,
      code2:`function click(e) {console.log('click'); console.log(e)}`,
      click: function clickTest(e) {
        console.log("click")
        console.log(e)
      }
    },
    {
      subTitle: "탭 컴포넌트 props 옵션 설정",
      desc:["메인축 방향 정렬 : justify-content", "$center, $right, $justifyContent={값}"],
      code1:`<TabBtn $center />, <TabBtn $right />, <TabBtn $justifyContent={"space-between"} />`,
      code2:`<TabBtn $center propsList={tabs} /> //$center 가운데 정렬`,
      tabs:[
        "탭 메뉴1",
        "탭 메뉴2",
        "탭 메뉴3"
      ],
      props:"$center"
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
                        <TabBtn 
                          propsList={guideTest.tabs && guideTest.tabs} 
                          propsEvent={guideTest.click && guideTest.click}
                          $center={guideTest.props} />
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
export default GuideTab;