import React from 'react';
import { routerList } from './RouterList';
import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import { ErrorPage } from 'pages/error/ErrorPage';

 
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        ...routerList
      ],
      errorElement: <ErrorPage />
    },
    {
      path: "/*",
      element: <ErrorPage />
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);




