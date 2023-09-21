import { useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
// component
import SkipNav from 'component/common/SkipNav';
import Header from 'component/common/Header';
import Footer from "component/common/Footer";

import { isMobile } from "api/common.js"
import 'assets/scss/components/MainTemplate.scss';

function MainTemplate () {
  const [headFixed, setHeadFixed] = useState(false);
  const location = useLocation();
  const isMoChk = useSelector((state) => {return state.mobileChk});
  const windowW = useSelector((state) => { return state.windowW})
  

  console.log(isMoChk) // mobile 체크 store 값으로 
  console.log(windowW)

  const fixChange = () => { // Mo 사이즈에서 메뉴 클릭 시
    if(headFixed && window.pageYOffset <= 0){
      setHeadFixed(!headFixed);
    }else{ 
      // console.log("Test")
    }
  }
  const handleScroll = () => {
    const headerH = document.querySelector('.header').offsetHeight;
    if(headerH < window.pageYOffset){ // fixed on
      setHeadFixed(true);
    }else{
      setHeadFixed(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect (() => { // ※ 개선 필요 : 스크롤 0 / 움직인 후 다시 불필요한 리렌더링 일수도 있다.
    let moOn = isMobile();
    if(moOn) setHeadFixed(false); 
  },[location])

  // header 가로 or 세로 버전 -- 추후 
  const [direction, setDirection] = useState(true); 
  const chnageNav = () => {
    setDirection(!direction)
  }

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
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default MainTemplate;