import GuideTemplate from '../component/pages/guide/GuideTemplate';
import ProfileTemplate from '../component/pages/profile/ProfileTemplate';
import RecordTemplate from '../component/pages/record/RecordTemplate';

// site
import SiteTemplate from '../component/pages/site/SiteTemplate';
import { IpartnersRouter } from '../component/pages/site/ipartners/routers/IpartnersRouter';

const ipartnersLink = IpartnersRouter
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
  },
  {
    title:"Site",
    path:"site",
    element: <SiteTemplate />,
    children:[
      ...ipartnersLink
    ]
  },
]