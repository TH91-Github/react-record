import styled from "styled-components";
import BlogVisual from "./BlogVisual";


function BlogMain(){
  return (
    <div className="blog">
      <BlogVisual />
      <BlogTest>
          dd
      </BlogTest>
    </div>
  )
}
export default BlogMain;

const BlogTest = styled.div`
  width:100%;
  height:500px;
  border:1px solid red;
`