import { Outlet } from 'react-router-dom';
import { useOutletContext } from "react-router";
import {CopyToClipboard} from 'react-copy-to-clipboard';
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
  const pathName = useOutletContext().pathname;
  const bannerTitle = pathName.replace('/','');
  // base - color breakpoint font
  const fontData = newArrChange(fonts)
  const colorData = newArrChange(colors);
  const breakPointData = newArrChange(breakpoints)
  function newArrChange(paramObj){
    return Object.entries(paramObj)
  }
  function copyBtn(text){
    alert(text+" 복사가 완료되었습니다.");
  }

  return (
    <div className="guide">
      <Banner $center>
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          GuideTemplate
        </TitleBar>
      </Banner>
      {/* 
        guide 목록으로 오는 경로 만들기
        상세 페이지 입장시에만 노출
      */}
      <Outlet />
    </div>
  )
}

export default GuideTemplate;