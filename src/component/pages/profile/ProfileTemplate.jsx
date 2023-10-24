import { useSelector } from "react-redux";
// component
import ProfileMain from "./ProfileMain";
import ProfileAbout from "./ProfileAbout";
import ProfileSkils from "./ProfileSkils";
import ProfileProject from "./ProfileProject";
import ProfilePlan from "./ProfilePlan";
// styled
import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";

function ProfileTemplate(){
  const profileData = useSelector((state) => state.allData.Profile);
  const isMobile = useSelector((state) => state.mobileChk);
  const componentOpt = {
    data : profileData,
    titSize : 24,
    isMo : isMobile
  }
  return (
    <div className="profile">
      {/* Profile Info */}
      <ProfileMain propsOpt={componentOpt} />
      <S.BoxWrap>
        {/* ABOUT */}
        <ProfileAbout propsOpt={componentOpt} />
        {/* SKilS */}
        <ProfileSkils propsOpt={componentOpt} />
        {/* PROJECT */}
        <ProfileProject propsOpt={componentOpt} />
        {/* PLAN */}
        <ProfilePlan propsOpt={componentOpt} />              
        <SP.Section>
          <S.TextP $align="center">
            감사합니다. 😁
          </S.TextP>
        </SP.Section>
      </S.BoxWrap>
    </div>
  )
}


export default ProfileTemplate;