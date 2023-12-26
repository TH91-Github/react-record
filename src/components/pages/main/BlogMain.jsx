import BlogMainVisual from "./BlogMainVisual";
import Observer from "components/common/element/Observer";
import BlogMainETC from "./BlogMainETC";
import BlogMainGuide from "./BlogMainGuide";
import BlogMainProfile from "./BlogMainProfile";
import BlogMainRecord from "./BlogMainRecord";

function BlogMain(){
  return (
    <div className="blog">
      <Observer maintenance={false} percentage={0.2}>
        <BlogMainVisual />
        <BlogMainProfile />
        <BlogMainGuide />
        <BlogMainRecord />
        <BlogMainETC />
      </Observer>
    </div>
  )
}
export default BlogMain;
