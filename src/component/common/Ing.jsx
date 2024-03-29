import { media } from "component/styled/common/Variable";
import { styled } from "styled-components";

const SettingWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  margin-top:20px;
  ${media.mo} {
    flex-direction: column;
  }
`;

const Txt = styled.span`
  font-size:14px;
  line-height:18px;
`;
const RotateInfinite = styled.span`
  display:inline-block;
  position:relative;
  width:20px;
  height:20px;
  animation : settingAni 5s linear infinite both;
  transform-origin:center center;
  @keyframes settingAni {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
  & > i {
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
  }
`;

function Ing ({children, ...props}) {
  return (
    <SettingWrap {...props}>
      <Txt>{children} ...</Txt>
      <RotateInfinite>
        <i>⚙️</i>
      </RotateInfinite>
    </SettingWrap>
  )
}
export default Ing;