// Main router
import BlogMain from 'components/pages/main/BlogMain';
// Guide router 👈 기본 스타일, 컴포넌트 가이드 
import GuideMain from 'components/pages/guide/GuideMain';
import { GuideRouter } from 'components/pages/guide/router/GuideRouter';
// Profile router 

// Record router 👈 기록, 설명 등 

// etc router 👈 샘플, 기타
import ETCMain from 'components/pages/etc/ETCMain';
import { ETCRouter } from 'components/pages/etc/router/ETCRouter';
import ProfileMain from 'components/pages/profile/ProfileMain';
import RecordMain from 'components/pages/record/RecordMain';

export const routerData = [
  { // Main
    index: true,
    element: <BlogMain />
  },
  {
    title:"프로필",
    path:"profile",
    element: <ProfileMain/>,
  },
  {
    title:"가이드",
    path:"guide",
    element: <GuideMain />,
    children:[
      ...GuideRouter
    ]
  },
  {
    title:"기록",
    path:"record",
    element: <RecordMain />,
  },
  {
    title:"샘플",
    path:"etc",
    element: <ETCMain />,
    children:[
      ...ETCRouter
    ]
  },
]