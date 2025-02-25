import { GlobalStyles } from 'assets/style/GlobalStyles';
import { Outlet } from 'react-router-dom';
import './App.css';
import { HeaderLayout } from 'components/header/HeaderLayout';
import { ContentWrap } from 'components/layout/ContentWrap';
import { FooterLayout } from 'components/footer/FooterLayout';

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
