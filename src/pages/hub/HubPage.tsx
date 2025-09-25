import { colors } from "assets/style/variables";
import { SideLayout } from "components/layout/SideLayout";
import { HubBoxCategory } from "components/pages/hub/HubBoxCategory";
import { HubCreate } from "components/pages/hub/HubCreate";
import { HubSideMenu } from "components/pages/hub/HubSideMenu";
import styled from "styled-components"

const SIDESIZE = 200;
export const HubPage = () => {
  return( 
    <StyleWrap $sideWidth={SIDESIZE} className="hub">
      <HubSideMenu $sideWidth={SIDESIZE}/>
      <div className="hub-inner">
        <div className="hub-heading">
          <h3 className="title">환영합니다! </h3>
          <p className="desc">원하는 주제로 공간을 만들어서 함께 공유해요. 😁</p>
        </div>
        <div className="hub-content">
          {/* 방 생성 */}
          {/* <HubCreate /> */}
          {/* 리스트 */}
          <div className="hub-category">
            <HubBoxCategory />
          </div>
          {/* 전체 공개  */}
          <div>
            
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}

type StyleWrapType = {
  $sideWidth : number
}
const StyleWrap = styled.div<StyleWrapType>`
.hub-inner {
  position:relative;
  width: 100%;
  padding-left: ${({$sideWidth}) => $sideWidth}px;
}
.hub-heading{
  padding:30px;
  background:${colors.blue};
  .title{
    font-size:20px;
    color:#fff;
  }
  .desc{
    margin-top:10px;
    color:#fff;
  }
}
`;