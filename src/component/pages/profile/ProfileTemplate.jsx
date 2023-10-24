import { useSelector } from "react-redux";
// component
import TitleBar from "component/common/TitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

// scss
import "assets/scss/components/Profile.scss";
import ProfileAbout from "./ProfileAbout";
import ProfileSkils from "./ProfileSkils";
import ProfileProject from "./ProfileProject";

function ProfileTemplate(){
  const profileData = useSelector((state) => state.allData.Profile);
  const pInfo = profileData.info;
  const pProject = profileData.project;
  const pProPlan = profileData.plan;

  // Title Style
  const styleTItSize = "24px";
  
  return (
    <div className="profile">
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

        <div className="section plan">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
                📚{pProPlan.title}
            </TitleBar>
            <div className="profile__box">
              <S.DivFlex>
              {
                pProPlan.lists.map((planLists,idx) => (
                  <div className="plan__info" key={idx}>
                    <p className="tit"><span>{planLists.title}</span></p>
                    <S.BoxLine $top $margin="15px 0 0 0" $padding="15px 0 0 0">
                      <ul className="lists">
                        {
                          planLists.desc.map((planDesc, idx) => (
                            <li className="square" key={idx}>
                              <p className="txt">{planDesc}</p>
                            </li>
                          ))
                        }
                      </ul>
                    </S.BoxLine>
                  </div>
                ))
              }
              </S.DivFlex>
            </div>
          </S.BoxInner>
        </div>
        <div className="section thank">
          <S.BoxInner>
            <S.TextP $align="center">
              감사합니다. 😁
            </S.TextP>
          </S.BoxInner>
        </div>
      </S.BoxWrap>
    </div>
  )
}


export default ProfileTemplate;