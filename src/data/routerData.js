// Guide router
import GuideTemplate from 'component/pages/guide/GuideTemplate';
import { GuideRouter } from 'component/pages/guide/routers/GuideRouter';

// Profile router
import ProfileTemplate from 'component/pages/profile/ProfileTemplate';

// Record router
import RecordTemplate from 'component/pages/record/RecordTemplate';
import { RecordRouter } from 'component/pages/record/routers/RecordRouter';

// Site router
import ETCTemplate from 'component/pages/etc/ETCTemplate';
import { ETCRouter } from 'component/pages/etc/routers/ETCRouter';


export const routerData = [
  { // Main 쳇 페이지 임시 프로필로 
    index: true,
    element: <ProfileTemplate />
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
    title:"프로필",
    path:"profile",
    element: <ProfileTemplate />,
  },
  {
    title:"기록",
    path:"/record",
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