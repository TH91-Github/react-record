import { Outlet } from "react-router-dom";

import Ing from "component/common/Ing";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";


function SiteTemplate(){
  return (
    <div className="site">
      <S.BoxInner $margin="30px auto">
        <TitleBar $align="center">
          SiteTemplate
        </TitleBar>
        <Ing $margin="10px 0 0 0">⚠️준비중🚧</Ing>
      </S.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;