// 검색 키워드
export const IconKeyword = [
  {
    code:'SvgSearch',
    keyword:['검색', 'magnifying-glass', 'search'],
  },
  {
    code:'SvgCode',
    keyword:['코드', 'code-bracket', 'code'],
  },
  {
    code:'SvgCube',
    keyword:['큐브', 'cube-transparent', 'cube'],
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