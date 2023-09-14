import Banner from "component/common/Banner";
import Search from "component/common/Search";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";
// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { colors } from "component/styled/common/Variable";

// scss
import "assets/scss/components/Guide.scss"

function GuideTemplate(){
  const colorData = Object.entries(colors)
  console.log(colorData)

  return (
    <div className="guide">
      <Banner $center>
        <TitleBar fontSize="32px" color={colors.whiteColor}>
          GuideTemplate
        </TitleBar>
      </Banner>
      <S.BoxWrap className="search">
        <S.BoxInner $padding="30px 30px 0" className="search__wrap">
          <Ing>⚠️작업중🚧</Ing>
          <S.DivFlex  $direction="row-reverse">
            <div className="search__inner">
              <Search placeholder="준비 중입니다..." btnText="확인" />
            </div>
            {/* 
              Record 관련 검색 기능 
              router.desc 구별
            */}
          </S.DivFlex>
        </S.BoxInner>
      </S.BoxWrap>
      <S.BoxLine $top $borderWidth="5px" $margin="30px 0 0" $padding="30px 0 0" className="">
      <S.BoxInner $padding="0 30px" $className="guide__font">
          <div className="guide__header">
            <TitleBar>Font</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="font">
              <S.UlFlex className="font__lists">
                <li className="font__lists-item">

                </li>
              </S.UlFlex>
              <div className="">
                <SubTitleBar>사용법</SubTitleBar>
                <S.TextP>
                  ⚠️ SCSS와 Styled 공통 변수 동일하게 작업.
                  
                </S.TextP>
              </div>
            </div>
          </div>
        </S.BoxInner>
        <S.BoxInner $padding="0 30px" $className="guide__color">
          <div className="guide__header">
            <TitleBar>Color</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="color">
              <S.UlFlex className="color__lists">
                <li>
                  {colorData.length}
                </li>
                {
                  colorData.map((colorItem,idx) => 
                  <li className="color__lists-item" key={idx}>
                    <S.ColorChip className="color-chip" $bg="#red"/>
                    {colorItem}
                  </li>
                  )
                }
              </S.UlFlex>
            </div>
          </div>
        </S.BoxInner>
      </S.BoxLine>
    </div>
  )
}


export default GuideTemplate;