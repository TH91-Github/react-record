import { Outlet } from "react-router-dom";

import Ing from "component/common/Ing";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";


function SiteTemplate(){
  return (
    <div className="site">
      <S.BoxInner $margin="0 auto">
        <TitleBar $align="center">
          SiteTemplate
        </TitleBar>
        <Ing>⚠️준비중🚧</Ing>
      </S.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;