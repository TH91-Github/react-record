import { GuidePage } from "pages/guide/GuidePage";
import { GUIDE_LIST } from "./pages/guide/GuideRouter";
import { MemberPage } from "pages/member/MemberPage";
import { TestWrap } from "pages/test/TestWrap";
import { HubPage } from "pages/hub/HubPage";

export const routerList = [
  {
    // Main
    index: true,
    id: "Main",
    element: <GuidePage />, // 임시
    // element: <MainPage />
  },
  {
    id: "ComponentGuide",
    path: "guide",
    title: "📔 가이드",
    view: "dev", // 개발 & 관리자 노출 전용
    element: <GuidePage />,
    children: [...GUIDE_LIST],
  },
  {
    id: "Test",
    path: "test",
    title: "테스트",
    view: "dev",
    element: <TestWrap />,
  },
  {
    id: "HUb", // 개발중
    path: "hub",
    title: "공간",
    view: 'dev',
    element: <HubPage />,
  },
  {
    id: "Member",
    path: "member",
    title: "멤버",
    view: false,
    element: <MemberPage />,
  },
];
