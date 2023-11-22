import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";
import {colors } from "component/styled/common/Variable";
import { Outlet } from "react-router-dom";

function ETCTemplate(){ 
  return (
    <div className="etc">
      <Banner $center>
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          EtC
        </TitleBar>
        <p className="txt">기능, 샘플 코드</p>
      </Banner>
      <Outlet />
    </div>
  )
}


export default ETCTemplate;