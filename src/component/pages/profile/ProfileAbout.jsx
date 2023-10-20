import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import { TextChange } from "api/regExpChk";
function ProfileAbout({propsData}) {
  const pAbout = propsData.about; 
  return (
    <>
      <SP.Section>
        <S.BoxInner>
          <TitleBar
            fontSize="24px"
            $align="center">
            {pAbout.title}
          </TitleBar>
          <SP.SectionBox>
            {
              pAbout.desc.map((aboutDesc, idx) => (
                <S.TextP $align="center" key={idx} dangerouslySetInnerHTML={{__html: TextChange(aboutDesc) }}></S.TextP>
              ))
            }
          </SP.SectionBox>
        </S.BoxInner>
      </SP.Section>
    </>
  )
}
export default ProfileAbout;