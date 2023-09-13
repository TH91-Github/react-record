import { Outlet } from "react-router-dom";

import Banner from "component/common/Banner";
import TitleBar from "component/common/TitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { colors } from "component/styled/common/Variable";


function SiteTemplate(){
  return (
    <div className="site">
      <Banner $center>
        <TitleBar fontSize="32px" color={colors.whiteColor}>
          SiteTemplate
        </TitleBar>
      </Banner>

      <S.BoxInner $margin="0 auto">
        <p>회사 및 다른 기업 사이트 만들고 확인할 수 있는 곳.</p>
        <Ing>⚠️준비중🚧</Ing>
      </S.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;