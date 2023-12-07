import styled from "styled-components";
import BlogVisual from "./BlogVisual";
import LazyLoad from "components/common/element/LazyLoad";


function BlogMain(){

  return (
    <div className="blog">
      <LazyLoad>
        <BlogBox />
        <BlogVisual/>
        <BlogTest>
          dd
        </BlogTest>
      </LazyLoad>
    </div>
  )
}
export default BlogMain;

const BlogTest = styled.div`
  width:100%;
  height:500px;
  border:1px solid red;
`;

const BlogBox = styled.div`
  width:100%;
  height:800px;
  background:gray;
`;