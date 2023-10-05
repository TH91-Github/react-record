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
  /*
    data 수정이 있을 시 
    state를 만들어서 1차 내부 data 수정 후 
    최종 버튼 클릭 시 업로드 및 store 데이터 변경
  */
  // console.log(profileData)
  console.log(pSkils)
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
                  pSkils.lists.map((skilsLists, idx) =>
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
                  )
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
                📌Project
            </TitleBar>
            <div className="profile__box">
              <ul className="project__lists">
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈현대카드 회사소개 (구축)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2016.08</span>
                      <span className="end">2016.10</span>
                    </div>
                    <div className="member">
                      <span className="number">총 2명</span>
                      <span className="contribution">기여도: <span className="num">25%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">사이트 구축  보조 역할</li>
                        <li className="square">디자인 시안 및 가이드라인 따라 페이지 코딩</li>
                        <li className="square">전체 사이트 수정 진행 및 마무리 작업을 진행하였습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, JavaScript</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈신세계 DF (면세점) (운영)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2016.11</span>
                      <span className="end">2017.02</span>
                    </div>
                    <div className="member">
                      <span className="number">총 3명</span>
                      <span className="contribution">기여도: <span className="num">30%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">신세계DF 사이트 전체 모니터링 및 검수</li>
                        <li className="square">UI, 버튼 확인 및 오류 및 결제  테스트 - 오류(개발 전달)</li>
                        <li className="square">프로모션 페이지 제작 및 Jquery로 간단한 게임 제작</li>
                        <li className="square">사이트 내 결제가 가능하여, 결제 관련 오류가 가장 큰 이슈였고 그러다보니 업무 시작은 전체 검수로 시작을 했습니다. 그만큼 검수를 통해 동작/오류 등 조기에 발견 수정을 하여 사이트 안정화의 중요성을 깨닫게 되는 프로젝트였습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, JavaScript, Jquery</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈현대자동차 그룹 (운영)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2017.03</span>
                      <span className="end">2018.02</span>
                    </div>
                    <div className="member">
                      <span className="number">총 3명</span>
                      <span className="contribution">기여도: <span className="num">35%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">국문, 영문 등 여러 사이트를 운영</li>
                        <li className="square">차량 이벤트, 소개 페이지 건 별로 하드코딩 및 기능 구현</li>
                        <li className="square">운영 유지 보수 및 레터</li>
                        <li className="square">리뉴얼, 웹 접근성 및 사이트 별 반응형, 적응형 작업 </li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, JavaScript, Jquery</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈SK브로드밴드(운영)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2018.03</span>
                      <span className="end">2021.05</span>
                    </div>
                    <div className="member">
                      <span className="number">총 3명</span>
                      <span className="contribution">기여도: <span className="num">60%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">사이트 운영 및 리뉴얼, 매달 프로모션 이벤트 진행</li>
                        <li className="square">Canvas, animation, transition, transform  효과</li>
                        <li className="square">PL 3번 팀원 총 2번 교체로 인한 PL 업무 대행</li>
                        <li className="square">가장 오래 맡은 프로젝트로 해당 프로젝트에 대해 히스토리를 가장 많이 알게 되었고 고객사의 업무 요청이 심하여 PL, 팀원 잦은 퇴사로 직급이 낮은 상태에서 PL 업무 대행하게 되어 전체적인 업무 흐름 및 다른 팀들과 커뮤니케이션으로 힘들지만 경험을 많이 쌓게 된 프로젝트였습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS , JavaScript, Jquery, SVN(Subversion), Canvas</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈소니스토어 (리뉴얼)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2021.06</span>
                      <span className="end">2021.11</span>
                    </div>
                    <div className="member">
                      <span className="number">총 3명</span>
                      <span className="contribution">기여도: <span className="num">45%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">기존 사이트 새롭게 리뉴얼 : 파견</li>
                        <li className="square">리뉴얼 진행 시 vue 또는 React로 리뉴얼 하기로 하였으나 하드코딩으로 변경</li>
                        <li className="square">하드코딩으로 작업으로 작업을 진행하여 큰 경험을 쌓지는 못하였지만 팀원들과 디자인 가이드 구축 후 가이드를 바탕으로 기획, 디자인과 커뮤니케이션을 하였고 작업 시 가이드 라인의 중요성을 느끼게 된 프로젝트였습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, SCSS, JavaScript, Jquery, GitLab, Zeplin</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈제네시스(운영)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2021.11</span>
                      <span className="end">2023.06</span>
                    </div>
                    <div className="member">
                      <span className="number">총 2명</span>
                      <span className="contribution">기여도: <span className="num">50%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">AEM 및 컴포넌트 개발에 맞게 코딩 진행</li>
                        <li className="square">반응형, 웹 접근성, 기능별 모듈화</li>
                        <li className="square">첫 AEM, 컴포넌트화 프로젝트로 가이드에 맞게 완성된 컴포넌트를 통해 AEM으로 재활용하여 보다 편리하게 운영을 하였고, 재활용에 최적화할 수 있게 컴포넌트 구상 및 가독성 좋은 컴포넌트의 중요성을 배우게 되었습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, SCSS, JavaScript, Jquery, SVN(Subversion), GitLab</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                  <S.BoxLine className="project__box">
                    <p className="title">🎈현대닷컴(운영)</p>
                    <p className="company">Ipartners</p>
                    <div className="date">
                      <span className="start">2023.07</span>
                      <span className="end">진행중</span>
                    </div>
                    <div className="member">
                      <span className="number">총 3명</span>
                      <span className="contribution">기여도: <span className="num">35%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <ul className="lists">
                        <li className="square">AEM 사이트와 Vue 사이트 운영 업무</li>
                        <li className="square">Vue로 진행하는 첫 프로젝트로 현재 프로젝트를 바탕으로 구조 파악 및 경험 쌓기에 도움이 되고 있습니다.</li>
                      </ul>
                      <div className="skils">
                        <p className="txt">HTML, CSS, SCSS, JavaScript, GitLab, Vue</p>
                      </div>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
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