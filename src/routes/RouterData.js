// Main router
import BlogMain from 'components/pages/main/BlogMain';

import { GuideRouter } from 'component/pages/guide/routers/GuideRouter';
import GuideTemplate from 'component/pages/guide/GuideTemplate';
import ProfileTemplate from 'component/pages/profile/ProfileTemplate';
import RecordTemplate from 'component/pages/record/RecordTemplate';
import { RecordRouter } from 'component/pages/record/routers/RecordRouter';
import ETCTemplate from 'component/pages/etc/ETCTemplate';
import { ETCRouter } from 'component/pages/etc/routers/ETCRouter';

export const routerData = [
  { // Main
    index: true,
    element: <BlogMain />
  },
  {
    title:"프로필",
    path:"profile",
    element: <ProfileTemplate/>,
  },
  {
    title:"가이드",
    path:"guide",
    element: <GuideTemplate />,
    children:[
      ...GuideRouter
    ]
  },
  {
    title:"기록",
    path:"record",
    element: <RecordTemplate />,
    children:[
      ...RecordRouter
    ]
  },
  {
    title:"샘플",
    path:"etc",
    element: <ETCTemplate />,
    children:[
      ...ETCRouter
    ]
  },
]