import { Outlet } from "react-router-dom";
import styled from "styled-components";

import SkipNav from "components/common/layout/SkipNav";
import Header from "components/common/layout/Header";
import Footer from "components/common/layout/Footer";



function BlogTemplate () {

  return (
    <div className="wrap">
      <SkipNav />
      <div>
        <Header />
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
  padding-top:50px;
`; 