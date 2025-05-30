import { GuidePage } from "pages/guide/GuidePage";
import { TestPage } from "test/TestPage";
import { GUIDE_LIST } from "./pages/guide/GuideRouter";

export const routerList = [
  { // Main
    index: true,
    id: "Main",
    element: <GuidePage /> // 임시
    // element: <MainPage />
  },
  {
    id:'ComponentGuide',
    path: "guide",
    title:'📔 가이드',
    view: false, // 개발 & 관리자 노출 전용
    element: <GuidePage />,
    children: [
      ...GUIDE_LIST
    ],
  },
  {
    id:'Test',
    path:'test',
    title:'테스트',
    view: false,
    element: <TestPage />
  }
];