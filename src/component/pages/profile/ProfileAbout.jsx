import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import { TextChange } from "api/regExpChk";
function ProfileAbout({propsOpt}) {
  const {data,titSize} = propsOpt;
  const pAbout = data.about; 
  return (
    <>
      <S.Section>
        <SC.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            {pAbout.title}
          </TitleBar>
          <S.SectionBox>
            {
              pAbout.desc.map((aboutDesc, idx) => (
                <SC.TextP $align="center" key={idx} dangerouslySetInnerHTML={{__html: TextChange(aboutDesc) }}></SC.TextP>
              ))
            }
          </S.SectionBox>
        </SC.BoxInner>
      </S.Section>
    </>
  )
}
export default ProfileAbout;