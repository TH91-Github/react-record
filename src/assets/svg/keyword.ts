// 📍 uiData.ts 가이드 목록 추가
// 검색 키워드
export const IconKeyword = [
  {
    code:'IconUser',
    keyword:['유저', '로그인', 'user']
  },
  {
    code:'IconLogout',
    keyword:['유저', '로그아웃', 'logout']
  },
  {
    code:'IconBookmark',
    keyword:['북마크', 'Bookmark', '즐겨찾기']
  },
  // svg common
  {
    code:'SvgSearch',
    keyword:['검색', 'magnifying-glass', 'search'],
  },
  {
    code:'SvgCode',
    keyword:['코드', 'code-bracket', 'code'],
  },
  {
    code:'SvgArrow',
    keyword:['arrow','< >','chevron','화살표','방향']
  },
  {
    code:'SvgCube',
    keyword:['큐브', 'cube-transparent', 'cube'],
  },
  {
    code:'SvgBook',
    keywrod:['book','규칙','책','open'],
  },
  {
    code:'SvgClipboard',
    keyword:['클립보드','clipboard-document-list'],
  },
  {
    code:'SvgFolder',
    keyword:['폴더', 'folder', '파일'],
  },
  {
    code:'SvgComponent',
    keyword:['컴포넌트','cube','box']
  },
  {
    code:'SvgSquareStack',
    keyword:['컴포넌트','square','stack']
  },
  {
    code:'SvgPuzzle',
    keyword:['퍼즐','puzzle-piece','도구']
  },
  {
    code:'SvgSetting',
    keyword:['세팅', '수정','편집','preferences','환경설정']
  },
  {
    code:'SvgDesign',
    keyword:['디자인','Design','color','font','breakpoints']
  },
  {
    code:'SvgRectangleStack',
    keyword:['박스 여러개', 'style','rectangle-stack', '모음']
  },
  // 브랜드 로고 svg
  {
    code:'SvgTistory',
    keyword:['티스토리','TISTORY','스토리','story','Tattertools+history']
  }
]



// 참고용
// 동적 import 함수
// const loadIcon = async (code) => {
//   try {
//     const module = await import(`./common/${code}.js`); // 파일 경로에 맞게 수정
//     return module.default; // 보통 아이콘 컴포넌트는 default export됨
//   } catch (error) {
//     console.error(`아이콘 로드 실패: ${code}`, error);
//     return null;
//   }
// };

// 검색 후 아이콘 로드
// const searchIcon = async (keyword) => {
//   const found = IconKeyword.find(item => item.keyword.includes(keyword));
//   if (found) {
//     return await loadIcon(found.code);
//   }
//   return null;
// };