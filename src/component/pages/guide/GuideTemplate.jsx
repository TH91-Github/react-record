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
      <S.BoxLine $top  $borderWidth="5px" $margin="30px 0 0" $padding="30px 0 0" className="">
        <S.BoxInner $padding="0 30px">
          <div className="guide__top">
            <TitleBar>Color</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="guide__info">
              <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
              <p className="desc">작성중...</p> 
            </div>
            <div className="color">
              <S.UlFlex $margin="10px 0 0" className="color__lists">
                {
                  colorData.map((colorItem,idx) => 
                  <li className="color__lists-item" key={idx}>
                    <S.ColorChip className="color-chip" $width="100%" $height="100px" $bg={colorItem[1]}/>
                    <div className="color__info">
                      <p className="color-code">{colorItem[1]}</p>
                      <p className="color-name">{colorItem[0]}</p>
                    </div>
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