import { GuidePage } from "pages/guide/GuidePage";
import { MainPage } from "pages/main/MainPage";
import { TestPage } from "test/TestPage";
import { guideList } from "./pages/guide/GuideRouter";

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
    element: <GuidePage />,
    children: [
      ...guideList
    ],
  },
  {
    id:'Test',
    path:'test',
    title:'테스트',
    element: <TestPage />
  }
];