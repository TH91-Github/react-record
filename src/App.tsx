
import { GlobalStyles } from 'assets/style/GlobalStyles';
import { ContentLayout } from 'components/layout/ContentLayout';
import { FooterLayout } from 'components/layout/footer/FooterLayout';
import { HighLayout } from 'components/layout/HighLayout';
import { Outlet } from 'react-router-dom';
import './App.css';
import { HeaderLayout } from './components/layout/header/HeaderLayout';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderLayout />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <FooterLayout />
      <HighLayout />
    </div>
  );
}
export default App;
