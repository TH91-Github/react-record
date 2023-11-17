
import styled from "styled-components";

import { breakpoints } from "component/styled/common/Variable";
import Ing from "component/styled/common/Ing";
import TabBtn from "component/common/TabBtn";

const TabListMotion = () => {
  
  return (
    <div>
      <Ing>⚠️작업중</Ing>
      <Inner>
        <TabBtn $center />
      </Inner>
    </div>
  )
}

export default TabListMotion;

// styled-components
const Inner = styled.div`
  position:relative;
  width:100%;
  margin:0 auto;
  padding:0 30px 80px;
  max-width:${breakpoints.table}px;
`