import { FolderStructure } from "pages/guide/principles/FolderStructure";
import { NamingConventionsPage } from "pages/guide/principles/NamingConventionsPage";
import { PrinciplesPage } from "pages/guide/principles/PrinciplesPage";

/*


*/

export const guideList = [
  {
    id:'principles',
    path: "principles",
    title:'📔 규칙',
    element: <PrinciplesPage />,
    children: [
      {
        id:'NamingConventions',
        path: "naming-conventions",
        title:'✍️ 네이밍 규칙',
        element: <NamingConventionsPage />
      },
      {
        id:'NamingConventions',
        path: "naming-conventions",
        title:'📂 폴더 구조',
        element: <FolderStructure />
      },
    ],
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