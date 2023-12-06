import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import SkipNav from "components/common/layout/SkipNav";
import Header from "components/common/layout/Header";
import Footer from "components/common/layout/Footer";



function BlogTemplate () {
  const location = useLocation();

  return (
    <div className="wrap">
      <SkipNav />
      <div>
        <Header location={location} />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </div>
  )
}
export default BlogTemplate;

const Container = styled.div`
  padding-top:80px;
`; 