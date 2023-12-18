import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import SkipNav from "components/common/layout/SkipNav";
import Header from "components/common/layout/Header";
import Footer from "components/common/layout/Footer";
import { colors, media } from "assets/styles/Variable";



function BlogTemplate () {
  const location = useLocation();

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