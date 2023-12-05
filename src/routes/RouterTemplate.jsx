import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from 'App';
import { routerData } from './routerData';
import Error from 'components/common/layout/Error';

function RouterTemplate(){
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      caseSensitive: true, // 대소문자를 구분하여 일치
      children:[
        ...routerData,
      ]
    },
    {
      path:"/*",
      element:<Error />
    }
  ])
  return <RouterProvider router={router} />;
  // fallbackElement={<div>Loading...TEST</div>} 
}
export default RouterTemplate;
