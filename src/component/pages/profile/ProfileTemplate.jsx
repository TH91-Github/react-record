import { useSelector } from "react-redux";

// styled
import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
import Ing from "component/styled/common/Ing";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

import ProfileAbout from "./ProfileAbout";
import ProfileSkils from "./ProfileSkils";
import ProfileProject from "./ProfileProject";
import ProfilePlan from "./ProfilePlan";

// scss
import "assets/scss/components/Profile.scss";
import ProfileMain from "./ProfileMain";


function ProfileTemplate(){
  const profileData = useSelector((state) => state.allData.Profile);
  const pInfo = profileData.info;
  const pProPlan = profileData.plan;

  // Title Style
  const styleTItSize = "24px";
  
  return (
    <div className="profile">
      {/* Top */}
      {/* <ProfileMain /> */}

      <div className="visual">
        <div className="visual-box">
          <div className="visual-info">
          <p className="name">{pInfo.name}</p>
            <p className="job">
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중) ✍️</small></span>
            </p>
            <S.SnsList $justifyContent="center" $margin="20px 0 0 0" $gap="10px">
              {
                pInfo.sns.map((sns) => {
                  return <S.A 
                    key={sns.title}
                    href={sns.url} target="_blank" rel="noopener noreferrer" title={`${sns.title} 기록 URL`}>
                    <S.Blind>{sns.title} Url</S.Blind>
                    { sns.title === 'Velog' && <S.Icon><SvgVelog></SvgVelog></S.Icon> }
                    { sns.title === 'Git' && <S.Icon><Github></Github></S.Icon> }
                    { sns.title === 'Naver' && <S.Icon $bg="#03C75A"><Naver></Naver></S.Icon> }
                  </S.A>
                })
              }
            </S.SnsList>
            <div className="contact">
              <ul>
                <li className="phone">
                  <p className="txt">
                    <S.Icon><Call color="#fff"></Call></S.Icon>
                    <span>{pInfo.phone}</span>
                  </p>
                </li>
                <li className="email">
                  <S.A href="mailto:je031@naver.com" className="txt">
                    <S.Icon><Email color="#000"></Email></S.Icon>
                    <span>{pInfo.email}</span>
                  </S.A>
                </li>
              </ul>
            </div>
            <Ing $margin="10px 0 0 0">프로필 수정 진행중</Ing>
          </div>
          <div className="visual-img">
          </div>
        </div>
      </div>
      <S.BoxWrap>
        {/* ABOUT */}
        <ProfileAbout propsData={profileData} />
        {/* SKilS */}
        <ProfileSkils propsData={profileData} />
        {/* PROJECT */}
        <ProfileProject propsData={profileData} />
        {/* PLAN */}
        <ProfilePlan propsData={profileData} />              
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