import { useState } from "react";
import SkipNav from './component/common/SkipNav';
import Header from './component/common/Header';
import { Outlet } from 'react-router-dom';
import './App.scss';

function App() {
  const [direction, setDirection] = useState(true);

  function chnageNav(){
    setDirection(!direction)
  }
  return (
    <div className="App">
      <SkipNav />
      <div className={'App-wrap ' + (direction ? 'row' : 'column')}>
        <Header 
          direction={direction} 
          chnageNav={chnageNav}/>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
