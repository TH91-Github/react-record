import PorgressBar from "component/common/ProgressBar";
import Ing from "component/common/Ing";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

// scss
import "assets/scss/components/Profile.scss";
import ImgProfile from "assets/images/profile.jpg";
// Title Style
const styleTItSize = "24px";

// 데이터로 만들기 전 하드코딩

function ProfileTemplate(){
  return (
    <div className="profile">
      <div className="visual">
        <div className="visual-box">
          <div className="visual-info">
          <p className="name">김태훈</p>
            <p className="job">
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중) ✍️</small></span>
            </p>
            <S.SnsList $align="center" $margin="20px 0 0 0" $gap="10px">
              <S.A 
                href="https://velog.io/@th_velog" target="_blank" rel="noopener noreferrer" title="Velog 기록 URL">
                <S.Blind>Velog Url</S.Blind>
                <S.Icon><SvgVelog color="#20C997"></SvgVelog></S.Icon>
              </S.A>
              <S.A 
                href="https://github.com/TH91-Github/react-record" target="_blank" rel="noopener noreferrer" title="GitHub URL">
                <S.Blind>Github Url</S.Blind>
                <S.Icon><Github color="#181717"></Github></S.Icon>
              </S.A>
              <S.A 
                href="https://blog.naver.com/k__taehoon__" target="_blank" rel="noopener noreferrer" title="Naver Blog URL">
                <S.Blind>Naver Blog Url</S.Blind>
                <S.Icon $bg="#03C75A"><Naver $padding="2px" color="#fff"></Naver></S.Icon>
              </S.A>
            </S.SnsList>
            <div className="contact">
              <ul>
                <li className="phone">
                  <p className="txt">
                    <S.Icon><Call color="#fff"></Call></S.Icon>
                    <span>010-6476-8035</span>
                  </p>
                </li>
                <li className="email">
                  <S.A href="mailto:je031@naver.com" className="txt">
                    <S.Icon><Email color="#000"></Email></S.Icon>
                    <span>je031@naver.com</span>
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
              👨‍💻ABOUT
            </TitleBar>
            <div className="profile__box">
            <S.TextP $align="center">
              과거엔 퍼블리셔, 현재와 미래에는 프론트엔드로<br />
              발전하고 싶은 <span class="color1">김태훈</span>입니다.<br />
            </S.TextP>
            <S.TextP $align="center">
              수동적인 개발자가 아닌 주도적으로 <br />
              문제해결을 하고 최고의 결과물을 위해 끊임없이<br />
              고민하는 개발자가 되려고 합니다.<br />
              😁
            </S.TextP>
            </div>
          </S.BoxInner>
        </div>
        <div className="section skils">
          <S.BoxInner>
            <TitleBar
              fontSize={styleTItSize}
              $align="center">
              🛠️SKILS
            </TitleBar>
            <div className="profile__box">
              <ul className="skils__lists">
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.ReactBadge>React</S.ReactBadge>
                    <PorgressBar value={35} />
                    <div className="desc">
                      <p>React 프로젝트는 진행을 하지 못하였습니다.</p>
                      <p>React 중심으로 스터디 및 공부를 하며 성장중에 있습니다.</p>
                      <p>fetch, axios, styled component, store, router, Hook 등 Velog를 통해 처음부터 정리하며 기록하고 있습니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.VueBadge>Vue</S.VueBadge>
                    <PorgressBar value={25} />
                    <div className="desc">
                      <p>현재 Vue2 프로젝트를 진행 중이며, Vue3는 개인 공부를 통해 경험을 했습니다.</p>
                      <p>axios, store, router, swiper, component, composition api 등</p>
                      <p>TodoList 및 개인작업을 통해 Vue3 진행중입니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.JSBadge>JavaScript</S.JSBadge>
                    <PorgressBar value={50} />
                    <div className="desc">
                      <p>여러 프로젝트 진행 중 JavaScript 보다 Jquery를 중심으로 사용하여 Jquery 보다는 다소 기술력이 부족하지만 일반적인 사이트 구현에 있어 어려움 없이 활용 가능합니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.JQueryBadge>Jquery</S.JQueryBadge>
                    <PorgressBar value={75} />
                    <div className="desc">
                      <p>현재 맡고 있는 프로젝트 전까지 Jquery만 사용을 하여 Jquery를 통한 기능 구현 및 이해는 자신이 있습니다.</p>
                      <p>Jquery를 사용이 줄어들고 있기에 현재는 Jquery 더 이상 사용을 하지 않고 있습니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.HTMLBadge>HTML</S.HTMLBadge>
                    <PorgressBar value={85} />
                    <div className="desc">
                      <p>웹 표준에 맞게 구조 및 작성 가능하고 상황에 맞게 태그 활용할 수 있습니다</p>
                      <p>컴포넌트 작성에 맞게 좀 더 재사용 가능하도록 마크업을 하기 위해 계속 고민하고 좀 더 나은 방향을 찾고 있습니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.CSSBadge>CSS</S.CSSBadge>
                    <PorgressBar value={85} />
                    <div className="desc">
                      <p>SCSS를 접하기전까지 CSS를 활용하여 프로젝트를 진행하였고, CSS선택자 및 일반적인 animation, transform 등 이해와 구현을 할 수 있습니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.SCSSBadge>SCSS</S.SCSSBadge>
                    <PorgressBar value={65} />
                    <div className="desc">
                      <p>프로젝트 진행 중 scss를 접하였고 현재 진행중인 프로젝트 및 개인 프로젝트에서 사용중에 있습니다.</p>
                      <p>변수, 함수형, Mixin, @content 등 사용</p>
                    </div>
                  </S.BoxLine>
                </li>
                <li className="skils__lists-item">
                  <S.BoxLine className="skils__box">
                    <S.EtCBadge>웹표준&#38;웹접근성</S.EtCBadge>
                    <PorgressBar value={80} />
                    <div className="desc">
                      <p>대기업 프로젝트를 진행하여 웹접근성 인증마크 작업 필수로 하기에 웹접근성, 웹표준에 맞게 작업을 하였습니다.</p>
                      <p>웹접근성 심사전 검수 및 기능 수정 가능합니다.</p>
                    </div>
                  </S.BoxLine>
                </li>
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
                      <span className="start">2016.11</span>
                      <span className="end">2017.02</span>
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
              <S.BoxFlex>
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
                        <p className="txt">2023년 11월 ~ TypeScript 시작 - 개인 프로젝트 적용</p>
                      </li>
                    </ul>
                  </S.BoxLine>
                </div>
              </S.BoxFlex>
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