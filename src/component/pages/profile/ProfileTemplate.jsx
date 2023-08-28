// import { styled } from "styled-components";
import Accordion from "../../styled/Accordion";
import AccItem from "../../styled/AccItem";
import AccBtn from "../../styled/AccBtn";
import AccInfo from "../../styled/AccInfo";
import "../../../assets/components/Profile.scss";
import TitleBar from "../../styled/TitleBar";


// Title Style
const styleTitPadding= "30px 0";
const styleTItSize = "24px";

function ProfileTemplate(){
  return (
    <div className="profile">
      <div className="visual">
        <div className="visual-box">
          <div className="visual-info">
            <p className="job">
              <span>Publishing</span>
              <span>➕</span>
              <span>Front-End <small>(진행중)</small></span>
            </p>
            <p className="name">김태훈</p>
          </div>
          <div className="visual-img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <section>
        <div className="about">
          <TitleBar
            padding={styleTitPadding}
            fontSize={styleTItSize}>
            ABOUT
          </TitleBar>
          <p>프론트엔드 개발자를 희망하고 있습니다</p>
          <p>새롭ㄴㅇㄴㅁ ㅇㅁㄴㅇ ㅌㅋㅊ ㅋㅌㅊ ㅋ</p>
          <p>zxc zxc asdkljas dlasㅇㅁㄴ ㅇㅁㄴㅇ</p>
        </div>
      </section>
      <section>
        <div className="skils">
          <TitleBar
            padding={styleTitPadding}
            fontSize={styleTItSize}>
            SKILS
          </TitleBar>
          <p>기술 목록 나열</p>
          <p>기술 목록 중 어떻게 할 수 있는지 설명</p>
          <p>HTML 태그 구조에 대해 설명 또는 React JSX 문법을 데이터 관리</p>
          <p>github 연동하여 작성</p>
        </div>
      </section>
      <section>
        <div className="plan">
          <TitleBar
            padding={styleTitPadding}
            fontSize={styleTItSize}>
              PLAN
          </TitleBar>
        </div>
      </section>
      <section>
        <div className="portfolio">
          <TitleBar
            padding={styleTitPadding}
            fontSize={styleTItSize}>
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
        </div>
      </section>
      <section>
        <div className="share">
          <TitleBar
            padding={styleTitPadding}
            fontSize={styleTItSize}>
            SHARE
          </TitleBar>
          <div className="share-lists">
            <ul>
              <li className="share-item">
                {/* <a href="#" className="share-link">velog</a> */}
                <p className="share-text">React, Vue, Git 등 처음부터 단계적으로 기록중 입니다</p>
              </li>
              <li>
                {/* <a href="#" className="share-link">Naver Blog</a> */}
                <p className="share-text">네이버 블로그는 일상 기록 작성중이며, velog 1차 기록 후 복습으로 네이버 블로그 작성하고 있습니다</p>
              </li>
              <li>
                {/* <a href="#" className="share-link">GitHub</a> */}
                <p className="share-text">GitHub 꾸준히 업데이트 하기를 목표로 하고 있습니다</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


export default ProfileTemplate;