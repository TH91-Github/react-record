import { GlobalStyles } from 'assets/style/GlobalStyles';
import { Outlet } from 'react-router-dom';
import { HeaderLayout } from 'components/layout/header/HeaderLayout';
import { ContentWrap } from 'components/layout/ContentWrap';
import { FooterLayout } from 'components/layout/footer/FooterLayout';
import './App.css';

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
