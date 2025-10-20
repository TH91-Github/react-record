import { GuidePopupDataType } from "types/guide";

export const hooksData: GuidePopupDataType[] =[
  {
    id:'hook-useToggle',
    title:'useToggle',
    desc:'boolean 값 toggle',
    category:'toggle', 
    modalTitle:'useToggle',
    modalDesc:'toggle, toggleChange, setToggle 구성되어 있습니다.',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/useToggle.ts',
    update:'2025-10-20',
    keyword:['toggle','on/off','온오프','토글']
  },
  {
    id:'hook-usePageTitle',
    title:'usePageTitle',
    desc:'page에 맞는 타이틀 태그 변경',
    category:'title', 
    modalTitle:'usePageTitle',
    modalDesc:'react - router 등록한 pages title 변경 hook',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/usePageTitle.ts',
    update:'2025-10-20',
    keyword:['title tag','타이틀 태그','<title>','페이지 타이틀']
  },
]
