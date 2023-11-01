import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import Ing from "component/styled/common/Ing";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

function ProfileMain({propsOpt}) {
  const pInfo = propsOpt.data.info;
  return (
    <>
      <S.ProfileWrap>
        <div className="profile__inner">
          <div className="profile__info">
            <p className="name">{pInfo.name}</p>
            <SC.BoxLine $top $marginTop={`${20}px`} $paddingTop={`${20}px`}>
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중) ✍️</small></span>
            </SC.BoxLine>
            <SC.SnsList $justifyContent="center" $margin="20px 0 0 0" $gap="10px">
              {
                pInfo.sns.map((sns) => {
                  return <SC.A 
                    key={sns.title}
                    href={sns.url} target="_blank" rel="noopener noreferrer" title={`${sns.title} 기록 URL`}>
                    <SC.Blind>{sns.title} Url</SC.Blind>
                    { sns.title === 'Velog' && <SC.Icon><SvgVelog></SvgVelog></SC.Icon> }
                    { sns.title === 'Git' && <SC.Icon><Github></Github></SC.Icon> }
                    { sns.title === 'Naver' && <SC.Icon $bg="#03C75A"><Naver></Naver></SC.Icon> }
                  </SC.A>
                })
              }
            </SC.SnsList>
            <S.Contact>
              <ul>
                <li className="phone">
                  <p className="txt">
                    <SC.Icon><Call color="#fff"></Call></SC.Icon>
                    <span>{pInfo.phone}</span>
                  </p>
                </li>
                <li className="email">
                  <SC.A href="mailto:je031@naver.com" className="txt">
                    <SC.Icon><Email color="#000"></Email></SC.Icon>
                    <span>{pInfo.email}</span>
                  </SC.A>
                </li>
              </ul>
            </S.Contact>
            <Ing $marginTop="10px">프로필 수정 진행중</Ing>
            <S.ProfileImg />
          </div>
        </div>
      </S.ProfileWrap>
    </>
  )
}
export default ProfileMain;