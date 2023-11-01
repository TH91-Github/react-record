import MainTemplate from "component/pages/MainTemplate";
import './App.scss';
import 'assets/scss/common.scss';
import { GlobalStyles } from "assets/styles/GlobalStyles";
function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <MainTemplate />
    </div>
  );
}

export default App;
