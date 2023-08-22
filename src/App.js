import './App.scss';
import SkipNav from './component/common/SkipNav';
import Header from './component/common/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SkipNav />
      <div className="App-wrap">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
