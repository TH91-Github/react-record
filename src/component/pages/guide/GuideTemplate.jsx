import { useNavigate } from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';
import { GuideRouter } from './routers/GuideRouter';
import { fonts, colors, breakpoints } from "component/styled/common/Variable";
import Banner from "component/common/Banner";
import Search from "component/common/Search";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";
// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
// scss
import "assets/scss/components/Guide.scss"


function GuideTemplate(){
  const navi = useNavigate();
  // base - color breakpoint font
  const fontData = newArrChange(fonts)
  const colorData = newArrChange(colors);
  const breakPointData = newArrChange(breakpoints)
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  
  // component Guide list 
  const [guideData, setGuideData] = useState([]);
  const fliterList = (selectName) => { // 보여지는 리스트 구별
    const changeData = [...GuideRouter];
    const viewList = changeData.filter(item => item.view && item);
    const selectList = viewList.filter(item => item.path.indexOf(selectName) > -1 && item);
    // 선별된 리스트가 없을 경우 view true 전체 노출 - all
    selectList.length > 0 ? setGuideData(selectList)
    : setGuideData(viewList)
  }
  
  const dataLoad = useCallback(() => {
    // data 구조 만들고 -> fetch 사용 예정. 
    fliterList();
  },[]);
  useEffect(() => { 
    dataLoad(); // 임시 데이터 recordData
  },[dataLoad])
  
  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
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
                    <CopyToClipboard text={colorItem[0]} >
                      <S.Button $width="100%" className="btn" onClick={()=>copyBtn(colorItem[0])}>
                        <S.ColorChip className="color-chip" $width="100%" $height="100px" $bg={colorItem[1]}>
                            <span className="color-code">{colorItem[1]}</span>
                        </S.ColorChip>
                        <div className="color__info">
                          <p className="color-name">{colorItem[0]}</p>
                        </div>
                      </S.Button>
                    </CopyToClipboard>
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
                  breakPointData.map((breakPointItme, idx) =>
                    <li className="breakpoint__lists-item" key={idx}>
                      <CopyToClipboard text={breakPointItme[0]}>
                        <button type="button" className="screen" onClick={()=>copyBtn(breakPointItme[0])}>
                          <span className="screen-line">
                            <S.colorTag className="value" $color={colors.textColor}>{`${breakPointItme[1]}px;`}</S.colorTag>
                          </span>
                          <S.colorTag $color={colors.color4}>{`${breakPointItme[0]}`}</S.colorTag>
                        </button>
                      </CopyToClipboard>
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
                      <CopyToClipboard text={fontItme[0]}>
                        <S.Button $width="100%" className="btn" onClick={()=>copyBtn(fontItme[0])}>
                          <p>{`${fontItme[0]} : ${fontItme[1]}`}</p>
                        </S.Button>
                      </CopyToClipboard>
                    </li>
                  )
                }
              </S.UlFlex>
            </div>
          </div>
        </S.BoxInner>
        {/* etc */}
        {
          guideData && guideData.map((etcList,idx) => (
            <S.BoxInner $margin="30px auto 0" $padding="0 30px" key={idx}>
              <div className="guide__top">
                <button type="button" title={`${etcList.title} 자세히 보기`} onClick={() =>{navi(etcList.path)}}>
                  <TitleBar $display="inline-block">{etcList.title}</TitleBar>
                  <S.TextS $margin="0 0 0 20px;">{etcList.desc}</S.TextS>
                </button>
              </div>
              {/* <button type="button" className="btn" title="자세히 보기" onClick={() =>{navi(item.path)}}></button> */}
            </S.BoxInner>
          ))
        }
      </S.BoxLine>
    </div>
  )
}

export default GuideTemplate;