import BlogTemplate from "components/BlogTemplate";
import './App.scss';
import 'assets/scss/common.scss';
import { GlobalStyles } from "assets/styles/GlobalStyles";
function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <BlogTemplate />
    </div>
  );
}

export default App;
