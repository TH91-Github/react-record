# 📖 Guide System Project - 진행 중
> Guide System은 이 프로젝트 전반에 걸쳐 네이밍 규칙, 디렉토리 구조, UI 스타일링, 컴포넌트 설계, 커스텀 Hook 및 유틸 함수 등
공통으로 사용하는 기준을 정의하고 설명과 함께 실제 동작 및 UI 예시를 확인할 수 있도록 문서화한 프로젝트입니다.<br/>
> 이후 프로젝트 진행 시 스타일 차이를 줄이고 일관성 있는 코드베이스와 유지보수성을 높이기 위한 목적으로 설계되었습니다.

### 🔗 vercel & storybook
- <a href="https://react-record.vercel.app/" target="_blank" rel="noopener noreferrer">vercel</a>

### Tech Stacks
- <span><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white" alt="React"></span>
- <span><img src="https://img.shields.io/badge/styled components-DB7093?logo=styled-components&logoColor=white" alt="styled components"/>
- <span><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"></span>
- <span><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white" alt="GitHub" /></span>
- <span><img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&amp;logo=firebase&amp;logoColor=black" alt="Firebase"></span>
- <span><img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white" alt="Vercel" /></span>

### 🧑‍💻 React & TypeScript 기반, 사용 스택
- redux toolkit : API 요청을 통한 비동기 데이터 처리와 상태 관리를 위해 사용
- recoil : UI 상태 & 스타일(포커스, 모달, 헤더, 다크/라이트 모드, 특정 컬러, 등)을 관리하기 위한 용도로 사용

### 사용 라이브러리
- styled-components : 글로벌 스타일 및 UI 별 스타일 분리, 컴포넌트 내 스타일 모듈화
- swiper.js : 슬라이드, 캐러셀 공통 UI를 구현하기 위해 사용
- highlight.js : 코드 블록에 구문 강조를 적용과 컴포넌트의 코드 예시를 시각적으로 보여줄 때 사용
  
<br />

| 분류               | 라이브러리/패키지 이름                                  | 설명 |
|--------------------|---------------------------------------------------------|------|
| **기본** | `react`                | React 18 CRA (Create React App) |
| **타입**     | `typescript`                                            | TypeScript 사용 |
| **라우팅**     | `react-router-dom`                                            | SPA 구조의 라우팅 처리 및 페이지 이동 관리 |
| **상태 관리**       | `react-redux`, `@reduxjs/toolkit`, `recoil`          | Redux 및 recoil 상태 관리 |
| **스타일링**   | `styled-components`                                     | CSS-in-JS 방식 스타일링 |
| **캐러셀**        | `swiper`                                                | 슬라이더, 캐러셀 UI 구현 사용 |
| **구문강조 및 코드 시각화**        | `highlight`                                                | 예시 코드 및 코드 입력 시각화 |

감사합니다. 🙇‍♂️
