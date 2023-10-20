import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import { useSelector } from "react-redux";

function ProfileSkils({propsData}) {
  const pSkils = propsData.skils;
  const isMobile = useSelector((state) => state.mobileChk);
  const gap = moChk("20px","10px");

  console.log(gap)
  function moChk(t,f){
    // pc / mo 순
    return !isMobile ? t : f
  }
  return (
    <>
      <SP.Section>
        <S.BoxInner>
          <TitleBar
            fontSize="24px"
            $align="center">
            🛠️{pSkils.title}
          </TitleBar>
          <SP.SectionBox>
            <S.UlFlex $gap={gap}>
              <li>dasdasd</li>
              <SP.SkilsLiBox>zxc</SP.SkilsLiBox>
              {/* <SP.LiBox $gap={gap} $size={moChk(4,2)}>ddd</SP.LiBox> */}
            </S.UlFlex>
          </SP.SectionBox>
        </S.BoxInner>
      </SP.Section>
    </>
  )
}
export default ProfileSkils;