import { ContentWrap } from 'components/layout/ContentWrap';
import { FooterLayout } from 'components/layout/footer/FooterLayout';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from 'assets/style/GlobalStyles';
import './App.css';
import { HeaderLayout } from './components/layout/header/HeaderLayout';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderLayout />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
      <FooterLayout />
    </div>
  );
}

export default App;
