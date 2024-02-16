import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import TitleBar from "component/common/TitleBar";
import { TextChange } from "utils/textChk";
function ProfileAbout({propsOpt}) {
  console.log(propsOpt)
  const {data,titSize} = propsOpt;
  console.log(data)
  const pAbout = data.about;
  return (
    <>
      <S.Section>
        <SC.BoxInner>
          <TitleBar
            $fontSize={`${titSize}px`}
            $align="center">
            {/* {pAbout.title} */}
          </TitleBar>
          <S.SectionBox>
            {
              pAbout?.desc.map((aboutDesc, idx) => (
                <S.TextCenter key={idx} dangerouslySetInnerHTML={{__html: TextChange(aboutDesc) }} />
              ))
            }
          </S.SectionBox>
        </SC.BoxInner>
      </S.Section>
    </>
  )
}
export default ProfileAbout;