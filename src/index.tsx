import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/Router';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import RecoilStore from 'recoil/recoilStore';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RecoilStore>
          <RouterProvider 
            router={router} 
            future={{ 
              v7_startTransition: true,
            }}
          />
        </RecoilStore>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Root : <div id="root"></div> 확인! ');
}

reportWebVitals();
