
import styled from "styled-components";

import { breakpoints } from "component/styled/common/Variable";
import Ing from "component/styled/common/Ing";

const TabListMotion = () => {
  return (
    <Wrap>
      <Ing>⚠️작업중</Ing>
    </Wrap>
  )
}

export default TabListMotion;

// styled-components
const Wrap = styled.div`
  position:relative;
  width:100%;
  max-width:${breakpoints.table};
`;