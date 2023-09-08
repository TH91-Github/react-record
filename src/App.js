import { useEffect, useState } from "react";
import SkipNav from './component/common/SkipNav';
import Header from './component/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
import './App.scss';
import Footer from "component/common/Footer";
import { breakpoints } from "component/styled/common/Variable";

function App() {
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();
  const [isMo, setIsMo] = useState(null);

  const fixChange = () => {
    setIsFixed(!isFixed);
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
      setIsMo(true)
    }
  }

  useEffect (() => {
    setIsFixed(false);
  },[location])

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
    <div className="App">
      <SkipNav />
      <div className={'App-wrap' + (direction ? ' row' : ' column') + (isFixed ? ' fixed' : '')}>
        <Header
          isFixed={isFixed}
          fixChange={fixChange}
          direction={direction} 
          chnageNav={chnageNav}/>
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
