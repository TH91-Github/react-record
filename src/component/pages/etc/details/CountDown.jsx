
import styled from "styled-components";
import { breakpoints, colors, fonts } from "component/styled/common/Variable";
import SubTitleBar from "component/common/SubTitleBar";

const CountDown = () => {
  

  return (
    <div>
      <Inner>
      <SubTitleBar   SubTitleBar $align="center">지정된 수 카운트 다운</SubTitleBar>
        <DescWrap>
          <Txt>지정된 값 입력 후 시작 버튼</Txt>
        </DescWrap>
      </Inner>
    </div>
  )
}
export default CountDown;

// styled-components
const Inner = styled.div`
  overflow:hidden;
  position:relative;
  width:100%;
  margin:0 auto;
  padding:30px 30px 80px;
  max-width:${breakpoints.table}px;
`;
const DescWrap = styled.div`
padding-top:20px;
  text-align:center;
`;

const Txt = styled.p`
  font-size:${fonts.size14}px;
  line-height:${fonts.size14 + 4}px;
  color:${colors.subTextColor};
  & + & {
    margin-top:10px;
  }
`;

