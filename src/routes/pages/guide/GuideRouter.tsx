import { AssetsPage } from "pages/guide/assets/AssetsPage";
import { ComponentsPage } from "pages/guide/components/ComponentsPage";
import { BreakpointsPage } from "pages/guide/design/BreakpointsPage";
import { DesignPage } from "pages/guide/design/DesignPage";
import { IconPage } from "pages/guide/ui-elements/IconPage";
import { HooksPage } from "pages/guide/hooks/HooksPage";
import { PreferencesPage } from "pages/guide/preferences/PreferencesPage";
import { DirectoryStructurePage } from "pages/guide/principles/DirectoryStructurePage";
import { NamingConventionsPage } from "pages/guide/principles/NamingConventionsPage";
import { PrinciplesPage } from "pages/guide/principles/PrinciplesPage";
import { UtilsPage } from "pages/guide/utils/UtilsPage";
import { FontsPage } from "pages/guide/design/FontsPage";
import { ColorsPage } from "pages/guide/design/ColorsPage";
import { ButtonPage } from "pages/guide/ui-elements/ButtonPage";

export const GUIDE_LIST = [
  {
    id:'principles',
    path: "principles",
    title:'규칙',
    element: <PrinciplesPage />,
    children: [
      {
        id:'naming-conventions',
        path: "naming-conventions",
        title:'네이밍 규칙',
        element: <NamingConventionsPage />
      },
      {
        id:'directory-structure',
        path: "directory-structure",
        title:'디렉토리 트리 구조',
        element: <DirectoryStructurePage />
      },
    ],
  },
  {
    id:'design',
    path: "design",
    title:'디자인',
    element: <DesignPage />,
    children: [
      {
        id:'colors',
        path: "colors",
        title:'색상',
        element: <ColorsPage />
      },
      {
        id:'fonts',
        path: "fonts",
        title:'글자',
        element: <FontsPage />
      },
      {
        id:'breakpoints',
        path: "breakpoints",
        title:'브레이크 포인트',
        element: <BreakpointsPage />
      },
    ],
  },
  {
    id:'ui',
    path: "ui",
    title:'UI 요소',
    element: <DesignPage />,
    children: [
      {
        id:'icon',
        path: "icon",
        title:'아이콘',
        element: <IconPage />
      },
      {
        id:'button',
        path: "button",
        title:'버튼',
        element: <ButtonPage />
      },
    ],
  },
  {
    id:'assets', 
    path: "assets",
    title:'리소스',
    element: <AssetsPage />,
  },
  {
    id:'components',
    path: "components",
    title:'컴포넌트',
    element: <ComponentsPage />,
  },
  {
    id:'hooks',
    path: "hooks",
    title:'커스텀 훅',
    element: <HooksPage />,
  },
  {
    id:'utils',
    path: "utils",
    title:'유틸 함수',
    element: <UtilsPage />,
  },
  {
    id:'preferences',
    path: "preferences",
    title:'환경설정',
    element: <PreferencesPage />,
  },
];

/*
guide/
├── principles/ # 규칙
│   ├── namingConventions - class, 컴포넌트 명 style 등
│   ├── folder
│   ├── 
│   └── 
├── foundation/      # 기본적인 규칙 (컬러,
│   ├── design - colors, , font, shadows
│   ├── breakpoints
│   ├── Dark mode
│   ├── Themes
│   └── Animation
├── assets/
│   ├── 
│   └── 
├── components/
│   ├── 
│   └── 
├── hooks/
│   ├── 
│   └── 
├── pages/
│   ├── 
│   └── 
├── utils/
│   ├── 
│   └── 
└── contributing.md

.md 설명

## 📌 네이밍 규칙
- `PascalCase` 사용 (`Button.js`, `Modal.js`)
- `index.js` 활용 (`import { Button } from './Button'`)

## 📌 Props 네이밍 가이드
- `isDisabled` (✅ `is` prefix 사용)
- `onClick` (✅ 이벤트 핸들러는 `on` prefix)
- `variant` (✅ 스타일 변형을 위한 `variant` prop)

- `components/` → **재사용 가능한 UI 컴포넌트**
- `pages/` → **라우트 페이지 컴포넌트**
- `hooks/` → **커스텀 훅**
- `utils/` → **유틸 함수**
- `styles/` → **전역 스타일**

*/