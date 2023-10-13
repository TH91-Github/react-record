// Guide router
import GuideTemplate from 'component/pages/guide/GuideTemplate';
import { GuideRouter } from 'component/pages/guide/routers/GuideRouter';

// Profile router
import ProfileTemplate from 'component/pages/profile/ProfileTemplate';

// Record router
import RecordTemplate from 'component/pages/record/RecordTemplate';
import { RecordRouter } from 'component/pages/record/routers/RecordRouter';

// Site router
import SiteTemplate from 'component/pages/site/SiteTemplate';
import { IpartnersRouter } from 'component/pages/site/ipartners/routers/IpartnersRouter';

export const routerData = [
  { // Main 쳇 페이지 임시 프로필로 
    index: true,
    element: <ProfileTemplate />
  },
  {
    title:"Guide",
    path:"guide",
    element: <GuideTemplate />,
    children:[
      ...GuideRouter
    ]
  },
  {
    title:"Profile",
    path:"profile",
    element: <ProfileTemplate />,
  },
  {
    title:"Record",
    path:"/record",
    element: <RecordTemplate />,
    children:[
      ...RecordRouter
    ]
  },
  {
    title:"Site",
    path:"site",
    element: <SiteTemplate />,
    children:[
      ...IpartnersRouter
    ]
  },
]