import { GuidePage } from "pages/guide/GuidePage";
import { MainPage } from "pages/main/MainPage";
import { TestPage } from "test/TestPage";

export const routerList = [
  { // Main
    index: true,
    id: "Main",
    element: <MainPage />
  },
  {
    id:'ComponentGuide',
    path: "guide",
    title:'📔 가이드',
    element: <GuidePage />
  },
  {
    id:'Test',
    path:'test',
    title:'테스트',
    element: <TestPage />
  }
  // {
  //   id: "Resume",
  //   path: "resume",
  //   title: "🧾이력서",
  //   view:['main-th-blog.vercel.app','localhost'],
  //   element: <ResumePage />,
  // children: [
    //     {
    //       index: true,
    //       // path:'user',
    //       id: "usersBoard",
    //       title: "사용자 관리",
    //       element: <UsersBoardPage />
    //     },
    //     {
    //       id: "UserValidityBoard",
    //       path: "validity",
    //       title: "사용자 승인 관리",
    //       element: <UserValidityBoardPage />,
    //     }
    //   ]
  // },
];