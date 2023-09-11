import PorgressBar from "component/common/ProgressBar";
import Ing from "component/common/Ing";

// styled
import * as S from "component/styled/common/AllStyled";
import TitleBar from "component/styled/TitleBar";
import { Email, Call, SvgVelog, Github, Naver, React } from "component/styled/common/SvgPath";

// scss
import "assets/scss/components/Profile.scss";

// Title Style
const styleTitPadding= "30px 0";
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
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <S.BoxWrap>
        <div className="section about">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
              👨‍💻ABOUT
            </TitleBar>
            <div className="profile__box">
            <S.TextP color="#ffffff" $align="center">
              웹 에이전시에서 웹 퍼블리셔로 여러 프로젝트를 진행하면서<br />
              데이터를 활용하여 지금보다 더 
            </S.TextP>
            </div>
          </S.BoxInner>
        </div>
        <div className="section skils">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
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
                      <p>fetch, axios, styled component, store, router, Hook 등 완벽하진 않지만</p>
                      <p>Velog를 통해 처음부터 정리하며 기록하고 있습니다.</p>
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
        <div className="section plan">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
                📚PLAN
            </TitleBar>
            <div className="profile__box">
              <S.BoxFlex $margin="20px 0 0 0">
                <div className="plan__info">
                  <p className="tit"><span>목표</span></p>
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
                </div>
                <div className="plan__info">
                  <p className="tit"><span>2023, 2024 계획</span></p>
                  <ul className="lists">
                    <li className="square">
                      <p className="txt">React 중심적 기술 향상</p>
                    </li>
                    <li className="square">
                      <p className="txt">2023년 React, Vue 프론트엔드에 필수 요소를 능숙하게 활용하기 위한 공부 및 발전</p>
                    </li>
                    <li className="square">
                      <p className="txt">2024년 TypeScript 시작 - 개인 프로젝트 적용</p>
                    </li>
                  </ul>
                </div>
              </S.BoxFlex>
            </div>
          </S.BoxInner>
        </div>
        <div className="section project">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
                📌Project
            </TitleBar>
            <div className="profile__box">
              <ul className="project__lists">
                <li className="project__lists-item">
                <S.BoxLine className="project__box">
                    <p className="title">📍프로젝트 이름</p>
                    <div className="date">
                      <span className="start">2023.09.11</span>
                      <span className="end">2023.09.11</span>
                    </div>
                    <div className="member">
                      <span className="number">총 5명</span>
                      <span className="contribution">기여도: <span className="num">30%</span></span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                      <p className="txt">
                      리뷰 텍스트
                      리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트리뷰 텍스트
                      </p>
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
                <li className="project__lists-item">
                <S.BoxLine className="project__box">
                    <p className="title">📍프로젝트 이름</p>
                    <div className="date">
                      <span className="start">2023.09.11</span>
                      <span className="end">2023.09.11</span>
                    </div>
                    <div className="member">
                      <span className="number">
                        <span className="txt">참여 인원 :</span>
                        <span>5명</span>
                      </span>
                      <span className="contribution">
                        <span className="txt">기여도:</span>
                        <span className="num">30%</span>
                      </span>
                    </div>
                    <S.BoxLine $top $margin="10px 0 0 0" $padding="10px 0 0 0" className="review">
                     
                    </S.BoxLine>
                  </S.BoxLine>
                </li>
              </ul>
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