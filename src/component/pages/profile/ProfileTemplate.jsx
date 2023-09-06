// styled
// import * as S from "component/styled/common/Common";
// import TitleBar from "component/styled/TitleBar";
// import Accordion from "component/styled/Accordion";
// import AccItem from "component/styled/AccItem";
// import AccBtn from "component/styled/AccBtn";
// import AccInfo from "component/styled/AccInfo";
// import { Email, Call, SvgVelog, Github, Naver, React, Vue, Photoshop } from "component/styled/common/SvgPath";

// scss
import "assets/scss/components/Profile.scss";

// // Title Style
// const styleTitPadding= "30px 0";
// const styleTItSize = "24px";

function ProfileTemplate(){
  return (
    <div className="profile">
      <div className="visual">
        {/* <div className="visual-box">
          <div className="visual-info">
          <p className="name">김태훈</p>
            <p className="job">
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중)</small></span>
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
          </div>
          <div className="visual-img">
            <img src="" alt="" />
          </div>
        </div> */}
      </div>
      {/* <section>
        <div className="about">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
              ABOUT
            </TitleBar>
            <p>프론트엔드 개발자를 희망하고 있습니다</p>
            <p>새롭ㄴㅇㄴㅁ ㅇㅁㄴㅇ ㅌㅋㅊ ㅋㅌㅊ ㅋ</p>
            <p>zxc zxc asdkljas dlasㅇㅁㄴ ㅇㅁㄴㅇ</p>
          </S.BoxInner>
        </div>
      </section>
      <section>
        <div className="skils">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
              SKILS
            </TitleBar>
            <p>기술 목록 나열</p>
            <p>기술 목록 중 어떻게 할 수 있는지 설명</p>
            <p>HTML 태그 구조에 대해 설명 또는 React JSX 문법을 데이터 관리</p>
            <p>github 연동하여 작성</p>
          </S.BoxInner>
        </div>
      </section>
      <section>
        <div className="plan">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
                PLAN
            </TitleBar>
          </S.BoxInner>
        </div>
      </section>
      <section>
        <div className="portfolio">
          <S.BoxInner>
            <TitleBar
              $padding={styleTitPadding}
              fontSize={styleTItSize}
              $align="center">
                PORTFOLIO
            </TitleBar>
            <Accordion>
              <AccItem>
                <AccBtn>
                  asdasdasd
                </AccBtn>
                <AccInfo>
                  dAccInfo
                </AccInfo>
              </AccItem>
            </Accordion>
          </S.BoxInner>
        </div>
      </section>
      <section>
        <div className="thank">
          <S.BoxInner>
            <S.TextP align="center">
              감사합니다. 😁
            </S.TextP>
          </S.BoxInner>
        </div>
      </section> */}
    </div>
  )
}


export default ProfileTemplate;