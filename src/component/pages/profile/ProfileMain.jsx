import * as S from "component/styled/common/AllStyled";
import * as SP from "component/pages/profile/styled/ProfileStyled";
import Ing from "component/styled/common/Ing";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

// scss
import "assets/scss/components/Profile.scss";

function ProfileMain({propsOpt}) {
  const pInfo = propsOpt.data.info;
  return (
    <>
      <SP.ProfileWrap>
        <div className="profile__inner">
          <div className="profile__info">
            <p className="name">{pInfo.name}</p>
            <S.BoxLine $top $marginTop={`${20}px`} $paddingTop={`${20}px`}>
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중) ✍️</small></span>
            </S.BoxLine>
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
            <SP.Contact>
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
            </SP.Contact>
            <Ing $marginTop="10px">프로필 수정 진행중</Ing>
            <div className="visual-img"></div>
            {/* <SP.ProfileImg /> */}
          </div>
        </div>
      </SP.ProfileWrap>
    </>
  )
}
export default ProfileMain;