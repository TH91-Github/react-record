import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
// component
import SkipNav from 'component/common/SkipNav';
import Header from 'component/common/Header';
import Footer from "component/common/Footer";
// store, js, css
import { sSetDataAll, sSetMobileChk } from "store/store";
import { loadAxios } from "utils/fetchAxios";
import { isMobile } from "utils/common.js"
import 'assets/scss/components/MainTemplate.scss';


function MainTemplate () {
  const [baseData, setBaseData] = useState('');
  const [headFixed, setHeadFixed] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  // 초기 데이터 변수 저장 및 store 저장
  const loadData = useCallback(async () => {
    const res = await loadAxios("https://raw.githubusercontent.com/TH91-Github/Data_Storage/main/th-blog/data/data.json");
    setBaseData(res.data);
    dispatch(sSetDataAll(res.data));
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);
  
  // Mo 사이즈에서 메뉴 클릭 시
  const fixChange = () => { 
    if(headFixed && window.pageYOffset <= 0){
      setHeadFixed(!headFixed);
    }
  }
  
  // Resize & Scroll
  const handleReSize = useCallback(()=> {
    let moState = isMobile();
    dispatch(sSetMobileChk(moState))
  },[dispatch])

  const handleScroll = () => {
    const headerH = document.querySelector('.header').offsetHeight;
    if(headerH < window.pageYOffset){ // fixed on
      setHeadFixed(true);
    }else{
      setHeadFixed(false);
    }
  }
  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleReSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleReSize]);

  useEffect (() => { // ※ 개선 필요 : 스크롤 0 / 움직인 후 다시 불필요한 리렌더링 일수도 있다.
    let moOn = isMobile();
    if(moOn) setHeadFixed(false); 
  },[location])

  // header 가로 or 세로 버전 -- 추후 
  const [direction, setDirection] = useState(true); 
  const chnageNav = () => {
    setDirection(!direction)
  }
  
  if(!baseData) return;
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
          <Outlet context={location} />
        </div>
        <Footer />
      </div>
    </div>
  )
}
export default MainTemplate;