import Banner from "component/common/Banner";
import Search from "component/common/Search";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";
// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { fonts, colors, breakpoints } from "component/styled/common/Variable";

// scss
import "assets/scss/components/Guide.scss"

function GuideTemplate(){
  const fontData = newArrChange(fonts)
  const colorData = newArrChange(colors);
  const breakPointData = newArrChange(breakpoints)
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  function copyBtn(){
    alert("alert / 복사 기능 준비 중...");
  }
  
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
            {/* <div className="search__inner">
              <Search placeholder="준비 중입니다..." btnText="확인" />
            </div> */}
            {/* 
              Record 관련 검색 기능 
              router.desc 구별
            */}
          </S.DivFlex>
        </S.BoxInner>
      </S.BoxWrap>
      <S.BoxLine $top  $borderWidth="5px" $margin="30px 0 0" $padding="30px 0 0" className="">
        {/* color */}
        <S.BoxInner $margin="0 auto" $padding="0 30px">
          <div className="guide__top">
            <TitleBar>Color</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="guide__info">
              <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
              <div className="guide__info__desc">
                <p className="desc">⚠️ SCSS, Styled var 둘 다 수정.</p>
                <p className="desc">SCSS : assets/scss/_variables.scss</p>
                <p className="desc">
                  ✅ 사용법 EX) :
                  <S.colorTag $color={colors.color4}> $whiteColor;</S.colorTag>
                </p>
                <p className="desc">Styled Var: component/styled/common/Variable.js</p>
                <p className="desc">
                  ✅ 사용법 EX) : 
                  <S.colorTag $color={colors.color4}> Styled - colors.whiteColor</S.colorTag>
                </p>
              </div>
            </div>
            <div className="color">
              <S.UlFlex $margin="20px 0 0" className="color__lists">
                {
                  colorData.map((colorItem,idx) => 
                  <li className="color__lists-item" key={idx}>
                    <S.Button $width="100%" className="btn" onClick={copyBtn}>
                      <S.ColorChip className="color-chip" $width="100%" $height="100px" $bg={colorItem[1]}/>
                      <div className="color__info">
                        <p className="color-code">{colorItem[1]}</p>
                        <p className="color-name">{colorItem[0]}</p>
                      </div>
                    </S.Button>
                  </li>
                  )
                }
              </S.UlFlex>
            </div>
          </div>
        </S.BoxInner>
        {/* breakpoint */}
        <S.BoxInner $margin="30px auto 0" $padding="0 30px">
          <div className="guide__top">
            <TitleBar>Breakpoint</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="guide__info">
              <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
              <div className="guide__info__desc">
                <p className="desc">⚠️ SCSS, Styled var 둘 다 수정.</p>
                <p className="desc">SCSS : assets/scss/_variables.scss</p>
                <p className="desc">
                  ✅ 사용법 EX) :
                  <S.colorTag $color={colors.color4}>{` @include onlyMo { ... }`}</S.colorTag>
                </p>
                <p className="desc">Styled Var: component/styled/common/Variable.js</p>
                <p className="desc">
                  ✅ 사용법 EX) : 
                  <S.colorTag $color={colors.color4}> breakpoints.pc</S.colorTag>
                </p>
              </div>
            </div>
            <div className="breakpoint">
              <S.UlFlex $margin="20px 0 0" className="breakpoint__lists">
                {
                  breakPointData.map((breakpointItme, idx) =>
                    <li className="breakpoint__lists-item" key={idx}>
                      {
                        console.log(breakpointItme)
                        
                      }
                      <button type="button" className="screen">
                        <span className="screen-line">
                          <S.colorTag className="value" $color={colors.textColor}>{`${breakpointItme[1]}px;`}</S.colorTag>
                        </span>
                        <S.colorTag $color={colors.color4}>{`${breakpointItme[0]}`}</S.colorTag>
                      </button>
                    </li>
                  )
                }
              </S.UlFlex>
            </div>
          </div>
        </S.BoxInner>
        {/* font */}
        <S.BoxInner $margin="30px auto 0" $padding="0 30px">
          <div className="guide__top">
            <TitleBar>Font</TitleBar>
          </div>
          <div className="guide__cont">
            <div className="guide__info">
              <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
              <div className="guide__info__desc">
              <p className="desc">⚠️ SCSS, Styled var 둘 다 수정.</p>
                <p className="desc">SCSS : assets/scss/_variables.scss</p>
                <p className="desc">
                  ✅ 사용법 EX) :
                  <S.colorTag $color={colors.color4}>$fontB;</S.colorTag>
                </p>
                <p className="desc">Styled Var: component/styled/common/Variable.js</p>
                <p className="desc">
                  ✅ 사용법 EX) : 
                  <S.colorTag $color={colors.color4}>Styled - fonts.fontB</S.colorTag>
                </p>
              </div>
            </div>
            <div className="font">
              <S.UlFlex $margin="20px 0 0" className="font__lists">
                {
                  fontData.map((fontItme, idx) =>
                    <li className="font__lists-item" key={idx}>
                      <S.Button $width="100%" className="btn" onClick={copyBtn}>
                        <p>{`${fontItme[0]} : ${fontItme[1]}`}</p>
                      </S.Button>
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