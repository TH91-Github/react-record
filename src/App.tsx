
import { GlobalStyles } from 'assets/style/GlobalStyles';
import { HeaderLayout } from './components/layout/header/HeaderLayout';
import { ContentLayout } from 'components/layout/ContentLayout';
import { Outlet } from 'react-router-dom';
import { FooterLayout } from 'components/layout/footer/FooterLayout';
import './App.css';
import { AlertModule } from 'components/modules/AlertModule';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <HeaderLayout />
      <ContentLayout>
        <Outlet />
      </ContentLayout>
      <FooterLayout />
      <AlertModule />
    </div>
  );
}

export default App;
