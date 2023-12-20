import BlogTemplate from "components/BlogTemplate";
import './App.scss';
import 'assets/scss/common.scss';
import { GlobalStyles } from "assets/styles/GlobalStyles";

// 삭제 예정
import MainTemplate from "component/pages/MainTemplate";

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      {/* 리뉴얼 작업 컴포넌트 */}
      {/* <BlogTemplate /> */}
      {/* 삭제 예정 */}
      <MainTemplate /> 
    </div>
  );
}

export default App;
