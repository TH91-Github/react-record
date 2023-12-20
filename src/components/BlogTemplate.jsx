import { useCallback, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sSetMobileChk } from "store/store";
import SkipNav from "components/common/layout/SkipNav";
import Header from "components/common/layout/Header";
import Footer from "components/common/layout/Footer";
import styled from "styled-components";
import { colors, media } from "assets/styles/Variable";
import { isMobileChk } from "utils/common";


function BlogTemplate () {
  const location = useLocation();
  const dispatch = useDispatch();

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