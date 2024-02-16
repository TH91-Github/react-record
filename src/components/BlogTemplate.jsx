import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sSetDataAll, sSetMobileChk } from "store/store";
import SkipNav from "components/common/layout/SkipNav";
import Header from "components/common/layout/Header";
import Footer from "components/common/layout/Footer";
import styled from "styled-components";
import { colors, media } from "assets/styles/Variable";
import { isMobileChk } from "utils/common";
import { loadAxios } from "utils/api";


function BlogTemplate () {
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
  const reSizesEvent = useCallback(()=> {
    let moState = isMobileChk();
    dispatch(sSetMobileChk(moState))
  },[dispatch])

  useEffect(() => {
    reSizesEvent();
    window.addEventListener("resize", reSizesEvent);
    return () => {
      window.removeEventListener("resize", reSizesEvent);
    };
  }, [reSizesEvent]);

  if(!baseData) return;

  return (
    <div className="wrap">
      <SkipNav />
      <Blog>
        <Header location={location} />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </Blog>
    </div>
  )
}
export default BlogTemplate;
const Blog = styled.div`
  min-width:320px;
  background:${colors.bgWhite};
`;
const Container = styled.div`
  padding-top:80px;
  ${media.mo}{
    padding-top:70px;
  }
`; 