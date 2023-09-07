import { Outlet } from "react-router-dom";


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
        ⚠️...준비중 🚧
      </S.BoxInner>
      <Outlet />
    </div>
  )
}


export default SiteTemplate;