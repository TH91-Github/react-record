import { Outlet } from 'react-router-dom';
import { useOutletContext } from "react-router";
import {colors } from "component/styled/common/Variable";
import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";

function GuideTemplate(){
  const pathName = useOutletContext().pathname;
  const bannerTitle = pathName.replace('/','');

  return (
    <div className="guide">
      <Banner $center>
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          GuideTemplate
        </TitleBar>
      </Banner>
      <Outlet />
    </div>
  )
}

export default GuideTemplate;