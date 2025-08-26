import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes/Router';
import { Provider } from 'react-redux';
import { store } from 'reduxStore/store';
import RecoilStore from 'recoilStore/recoilStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient();

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root : <div id="root"></div> 확인 필요 ');
}

reportWebVitals();
