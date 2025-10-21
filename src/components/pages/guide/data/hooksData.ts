import { GuidePopupDataType } from "types/guide";

export const hooksData: GuidePopupDataType[] =[
  // ⬇️ toggle on/off 관련 hook
  {
    id:'hook-useToggle',
    title:'useToggle',
    desc:'boolean 값 toggle',
    category:'Toggle', 
    modalTitle:'useToggle',
    modalDesc:'toggle, toggleChange, setToggle 구성되어 있습니다.',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/useToggle.ts',
    update:'2025-10-20',
    keyword:['useToggle','toggle','on/off','온오프','토글']
  },
  // title hook
  {
    id:'hook-usePageTitle',
    title:'usePageTitle',
    desc:'page에 맞는 타이틀 태그 변경',
    category:'Title', 
    modalTitle:'usePageTitle',
    modalDesc:'react - router 등록한 pages title 변경 hook',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/usePageTitle.ts',
    update:'2025-10-20',
    keyword:['usePageTitle','title tag','타이틀 태그','<title>','페이지 타이틀']
  },
  // ⬇️ data memo 최적화 관련 hook
  {
    id:'hook-useMatchItem',
    title:'useMatchItem',
    desc:'불필요한 렌더링 방지 및 최적화하여 일치하는 인덱스와 정보 반환',
    category:'Data', 
    modalTitle:'useMatchItem/useMatchItems',
    modalDesc:'useMemo 활용한 일치하는 값 반환 목적 ',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/useMatchItem.ts',
    update:'2025-10-20',
    keyword:['useMatchItem','match','find','일치값 반환','최적화 찾기']
  },
  {
    id:'hook-useFixedData',
    title:'useFixedData',
    desc:'변경이 없는 데이터를 불필요한 렌더링 연산을 줄이는 최적화',
    category:'Data', 
    modalTitle:'useFixedData',
    modalDesc:'초기 data를 1회 가공 후 유지 재계산 하지 않는다',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/useFixedData.ts',
    update:'2025-10-20',
    keyword:['useFixedData','고정 데이터','data memo 사용','초기 데이터','불필요한 계산 방지']
  },
]
