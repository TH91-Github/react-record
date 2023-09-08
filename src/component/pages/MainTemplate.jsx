import { useEffect, useState } from "react";
import SkipNav from 'component/common/SkipNav';
import { Outlet, useLocation } from 'react-router-dom';

// component
import Header from 'component/common/Header';
import Footer from "component/common/Footer";
// styled
import { breakpoints } from "component/styled/common/Variable";
// scss
import 'assets/scss/components/MainTemplate.scss';


function MainTemplate () {
  const [headFixed, setHeadFixed] = useState(false);
  const location = useLocation();
  const [isMo, setIsMo] = useState(null);

  const fixChange = () => {
    setHeadFixed(!headFixed);
  }
  const reSizeEvent = () => {
    isMobileChk();
  }
  const scrollEvent = () => { // scroll
    console.log(window.pageYOffset)
  }
  const isMobileChk = () => {
    const wininnW = window.innerWidth;
    const scrollbarW = parseInt(wininnW - document.body.clientWidth);
    const winW = parseInt(wininnW - scrollbarW);
    if(isMo === null){
      winW < breakpoints.mo ? setIsMo(true) : setIsMo(false);
    }else if(winW < breakpoints.mo && isMo === true) {
      setIsMo(false)
    }else if(winW >= breakpoints.mo && isMo === false){
      setIsMo(true);
    }
  }

  useEffect (() => {
    setHeadFixed(false);
  },[location, isMo])

  useEffect (() => {
    reSizeEvent();
    window.addEventListener("resize", reSizeEvent);
    window.addEventListener("scroll", scrollEvent);
    return () => {
      console.log("clean up")
      window.removeEventListener("resize", reSizeEvent);
      window.removeEventListener("scroll", scrollEvent);
    }
  },[])

  // header 가로 or 세로 버전
  const [direction, setDirection] = useState(true); 
  const chnageNav = () => {
    setDirection(!direction)
  }
  
  return (
    <div className="main">
      <SkipNav />
      <div className={'main-wrap' + (direction ? ' row' : ' column') + (headFixed ? ' fixed' : '')}>
        <Header
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