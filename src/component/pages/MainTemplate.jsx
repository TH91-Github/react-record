import { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
// component
import SkipNav from 'component/common/SkipNav';
import Header from 'component/common/Header';
import Footer from "component/common/Footer";

import { isMobile } from "api/common.js"
import { breakpoints } from "component/styled/common/Variable";
import 'assets/scss/components/MainTemplate.scss';

function MainTemplate () {
  const [headFixed, setHeadFixed] = useState(false);
  const [isMo, setIsMo] = useState(null);
  const location = useLocation();
  const isMoChk = useSelector((state) => {return state.mobileChk});
  const windowW = useSelector((state) => { return state.windowW})
  let windY = 0;

  console.log(isMoChk) // mobile 체크 store 값으로 
  console.log(windowW)

  const fixChange = () => {
    if(headFixed && windY <= 0){
      setHeadFixed(!headFixed);
    }else{ 
      // console.log("Test")
    }
  }
  
  const reSizeEvent = () => {
    isMobileChk();
  }

  isMobile()

  const scrollEvent = () => { // scroll *공통 빼야하는 요소
    const headerH = document.querySelector('.header').offsetHeight;
    windY = window.pageYOffset;
    if(headerH < windY){
      setHeadFixed(true);
    }else{
      setHeadFixed(false);
    }
  }
  const isMobileChk = () => { // *공통 빼야하는 요소
    const wininnW = window.innerWidth;
    const scrollbarW = parseInt(wininnW - document.body.clientWidth);
    const winW = parseInt(wininnW - scrollbarW);
    if(isMo === null){
      winW < breakpoints.mo ? setIsMo(true) : setIsMo(false);
      return
    }else if(winW < breakpoints.mo && isMo === true) {
      setIsMo(false)
    }else if(winW >= breakpoints.mo && isMo === false){
      setIsMo(true);
    } 
    isMobileChk();
  }

  useEffect (() => { // ※ 개선 필요 : 스크롤 0 / 움직인 후 다시 불필요한 리렌더링 일수도 있다.
    if(isMo) setHeadFixed(false); 
  },[location])

  // scroll, resize event *공통으로 빼는 작업 필요.
  useEffect (() => {  // ※ React Hook useEffect has missing dependencie 개선
    window.addEventListener("resize", reSizeEvent);
    window.addEventListener("scroll", scrollEvent);
    return () => {
      console.log("clean up")
      window.removeEventListener("resize", reSizeEvent);
      window.removeEventListener("scroll", scrollEvent);
    }
  },[])

  // header 가로 or 세로 버전 -- 추후 
  const [direction, setDirection] = useState(true); 
  const chnageNav = () => {
    setDirection(!direction)
  }
  /*
    해야할 목록
    Data, 공통 함수, 스토어를 통해
    공통 변수 지정
    pc/mo, 첫 전체 데이터 등
  */
  return (
    <div className="main">
      <SkipNav />
      <div className={'main-wrap' + (direction ? ' row' : ' column') + (headFixed ? ' fixed' : '')}>
        <Header
          location={location}
          headFixed={headFixed}
          fixChange={fixChange}
          direction={direction} 
          chnageNav={chnageNav}/>
        <div className="container">
          <Outlet context={{isMo}} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default MainTemplate;