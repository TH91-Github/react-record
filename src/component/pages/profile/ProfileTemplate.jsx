import { useSelector } from "react-redux";
// component
import TitleBar from "component/common/TitleBar";

// styled
import * as S from "component/styled/common/AllStyled";
import Ing from "component/styled/common/Ing";
import PorgressBar from "component/styled/common/ProgressBar";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

import { TextChange } from "api/regExpChk";
// scss
import "assets/scss/components/Profile.scss";

function ProfileTemplate(){
  const profileData = useSelector((state) => state.allData.Profile);
  const pInfo = profileData.info;
  const pAbout = profileData.about;
  const pSkils = profileData.skils;
  const pProject = profileData.project;
  /*
    data 수정이 있을 시 
    state를 만들어서 1차 내부 data 수정 후 
    최종 버튼 클릭 시 업로드 및 store 데이터 변경
  */
  // console.log(profileData)
  console.log(pProject)
  const comma = (skilsList) => {
    const commaTxt = "";
    return commaTxt
  }
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
        <div className="section about">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
              {pAbout.title}
            </TitleBar>
            <div className="profile__box">
              {
                pAbout.desc.map((aboutDesc, idx) => (
                  <S.TextP $align="center" key={idx} dangerouslySetInnerHTML={{__html: TextChange(aboutDesc) }}></S.TextP>
                ))
              }
            </div>
          </S.BoxInner>
        </div>
        <div className="section skils">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
              🛠️{pSkils.title}
            </TitleBar>
            <div className="profile__box">
              <ul className="skils__lists">
                {
                  pSkils.lists.map((skilsLists, idx) => (
                    <li className="skils__lists-item" key={idx}>
                      <S.BoxLine className="skils__box">
                        {/* 컴포넌트 분류 필요. */}
                        { skilsLists.category === 'react' && <S.ReactBadge>{skilsLists.title}</S.ReactBadge> }
                        { skilsLists.category === 'vue' && <S.VueBadge>{skilsLists.title}</S.VueBadge> }
                        { skilsLists.category === 'javascript' && <S.JSBadge>{skilsLists.title}</S.JSBadge> }
                        { skilsLists.category === 'jquery' && <S.JQueryBadge>{skilsLists.title}</S.JQueryBadge> }
                        { skilsLists.category === 'html' && <S.HTMLBadge>{skilsLists.title}</S.HTMLBadge> }
                        { skilsLists.category === 'css' && <S.CSSBadge>{skilsLists.title}</S.CSSBadge> }
                        { skilsLists.category === 'scss' && <S.SCSSBadge>{skilsLists.title}</S.SCSSBadge> }
                        { skilsLists.category === 'etc' && <S.EtCBadge>{skilsLists.title}</S.EtCBadge> }
                        <PorgressBar value={skilsLists.percent} />
                        <div className="desc">
                          {
                            skilsLists.desc.map((skilsDesc, idx) => (
                              <S.TextP key={idx} dangerouslySetInnerHTML={{__html: TextChange(skilsDesc) }}></S.TextP>
                            ))
                          }
                        </div>
                      </S.BoxLine>
                    </li>
                  ))
                }
              </ul>
            </div>
          </S.BoxInner>
        </div>
        <div className="section project">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
                📌{pProject.title}
            </TitleBar>
            <div className="profile__box">
              <ul className="project__lists">
                {
                  pProject.lists.map((projectLists, idx) => (
                    <li className="project__lists-item" key={idx}>
                      <S.BoxLine className="project__box">
                        <p className="title">{projectLists.title}</p>
                        <p className="company">{projectLists.company}</p>
                        <div className="date">
                          <span className="start">{projectLists.date.start}</span>
                          <span className="end">{projectLists.date.end}</span>
                        </div>
                        <div className="member">
                          <span className="number">총 {projectLists.totalPeople}명</span>
                          <span className="contribution">기여도: <span className="num">{projectLists.participation}%</span></span>
                        </div>
                        <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                          <ul className="lists">
                            {
                              projectLists.desc.map((projectDesc, idx) => (
                                <li className="square" key={idx}>{projectDesc}</li>
                              ))
                            }
                          </ul>
                          <div className="skils">
                            <p className="txt">{
                              projectLists.skils.map((skilsTxt ,idx) => (
                                <span className="comma" key={idx}>{skilsTxt}</span>
                              ))
                            }</p>
                            {/* <p className="txt">{comma(projectLists.skils)}</p> */}
                          </div>
                        </S.BoxLine>
                      </S.BoxLine>
                    </li>
                  ))
                }
              </ul>
            </div>
          </S.BoxInner>
        </div>
        <div className="section plan">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
                📚PLAN
            </TitleBar>
            <div className="profile__box">
              <S.DivFlex>
                <div className="plan__info">
                  <p className="tit"><span>목표</span></p>
                  <S.BoxLine $top $margin="15px 0 0 0" $padding="15px 0 0 0">
                    <ul className="lists">
                      <li className="square">
                        <p className="txt">velog를 통해 복습을 하며, 기술 정리</p>
                      </li>
                      <li className="square">
                        <p className="txt">github 꾸준한 기록</p>
                      </li>
                      <li className="square">
                        <p className="txt">현재 포트폴리오 정리 되지 않았지만, 계속된 수정을 통해 가이드 및 완성도 높게 수정 진행.</p>
                      </li>
                      <li className="square">
                        <p className="txt">전체적으로 안정기를 찾은 후 naver 블로그를 통해 2차 복습 진행</p>
                      </li>
                    </ul>
                  </S.BoxLine>
                </div>
                <div className="plan__info">
                  <p className="tit"><span>2023, 2024 계획</span></p>
                  <S.BoxLine $top $margin="15px 0 0 0" $padding="15px 0 0 0">
                    <ul className="lists">
                      <li className="square">
                        <p className="txt">React 중심적 기술 향상</p>
                      </li>
                      <li className="square">
                        <p className="txt">React, Vue 프론트엔드에 필수 요소를 능숙하게 활용하기 위한 공부 및 발전</p>
                      </li>
                      <li className="square">
                        <p className="txt">2023년 11월 ~ TypeScript 시작</p>
                      </li>
                    </ul>
                  </S.BoxLine>
                </div>
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