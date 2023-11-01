import { Outlet } from "react-router-dom";

import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";

// styled
import * as SC from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { colors } from "component/styled/common/Variable";


function SiteTemplate(){
  return (
    <div className="site">
      <Banner $center>
        <TitleBar $fontSize="32px" $color={colors.baseWhite}>
          SiteTemplate
        </TitleBar>
      </Banner>
      <SC.BoxInner $margin="0 auto">
        <Ing>⚠️준비중🚧</Ing>
      </SC.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;