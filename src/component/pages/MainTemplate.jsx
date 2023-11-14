import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import styled from "styled-components";
// component
import SkipNav from 'component/common/SkipNav';
import Header from "component/common/layout/Header";
import Footer from "component/common/Footer";
// store, js, css
import { sSetDataAll, sSetMobileChk } from "store/store";
import { loadAxios } from "utils/fetchAxios";
import { isMobile } from "utils/common.js"

function MainTemplate () {
  const [baseData, setBaseData] = useState('');
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

  // Resize
  const handleReSize = useCallback(()=> {
    let moState = isMobile();
    dispatch(sSetMobileChk(moState))
  },[dispatch])

  const handleScroll = () => {
    console.log("scroll")
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

  if(!baseData) return;
  return (
    <div className="main">
      <SkipNav />
      <div>
        <Header 
          location={location} />
        <Container>
          <Outlet context={location} />
        </Container>
        <Footer />
      </div>
    </div>
  )
}
export default MainTemplate;

const Container = styled.div`
  padding-top:50px;
`; 