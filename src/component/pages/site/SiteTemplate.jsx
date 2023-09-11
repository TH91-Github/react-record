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
        <hr />
        <p>React로 회사 및 다른 기업 사이트 만들고 확인할 수 있는 곳.</p>
      </S.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;