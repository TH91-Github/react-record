import GuideTemplate from 'component/pages/guide/GuideTemplate';
import ProfileTemplate from 'component/pages/profile/ProfileTemplate';

// Record router
import RecordTemplate from 'component/pages/record/RecordTemplate';
import { RecordRouter } from 'component/pages/record/routers/RecordRouter';

// Site router
import SiteTemplate from 'component/pages/site/SiteTemplate';
import { IpartnersRouter } from 'component/pages/site/ipartners/routers/IpartnersRouter';

export const routerData = [
  {
    title:"Guide",
    path:"guide",
    element: <GuideTemplate />,
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