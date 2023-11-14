import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/profile/styled/ProfileStyled";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

function ProfileMain({propsOpt}) {
  const pInfo = propsOpt.data.info;
  return (
    <>
      <S.ProfileWrap>
        <div className="profile__inner">
          <div className="profile__info">
            <p className="name">{pInfo.name}</p>
            <S.LineWrap $top>
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중) ✍️</small></span>
            </S.LineWrap>
            <S.SnsList $justifyContent="center" $gap="10">
              {
                pInfo.sns.map((sns) => {
                  return <SC.A 
                    key={sns.title}
                    href={sns.url} target="_blank" rel="noopener noreferrer" title={`${sns.title} 기록 URL`}>
                    <SC.Blind>{sns.title} Url</SC.Blind>
                    { sns.title === 'Velog' && <SC.Icon><SvgVelog></SvgVelog></SC.Icon> }
                    { sns.title === 'Git' && <SC.Icon><Github></Github></SC.Icon> }
                    {/* { sns.title === 'Naver' && <SC.Icon $bg="#03C75A"><Naver></Naver></SC.Icon> } */}
                  </SC.A>
                })
              }
            </S.SnsList>
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
            <S.ProfileImg />
          </div>
        </div>
      </S.ProfileWrap>
    </>
  )
}
export default ProfileMain;