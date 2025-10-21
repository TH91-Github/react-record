import { GuidePopupDataType } from "types/guide";

export const utilsData: GuidePopupDataType[] =[
  {
    id:'utils-common',
    title:'공통 utils',
    desc:'공통으로 사용하는 함수를 모아놓았습니다.',
    category:'Common', 
    modalTitle:'Common Utils',
    modalDesc:'자주 사용하는 공통 함수 파일입니다. <br />모바일 사이즈 체크, 클래스 조건, 복사 카피 등 모음',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/utils/common.ts',
    update:'2025-10-20',
    keyword:['공통','utils','모바일 사이즈 체크,','클래스 조건', '복사 카피', '랜덤 값', '중복 없는 id 랜덤 지정','이스케이프', 'sanitize', 'html 보안']
  },
  {
    id:'utils-regex',
    title:'Regex 정규 표현식',
    desc:'정규 표현식 정규식 관련 모음',
    category:'Regex', 
    modalTitle:'Regex Utils',
    modalDesc:'정규 표현식, 정규식, 특정 규칙 처리 regex 함수 모음',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/utils/regex.ts',
    update:'2025-10-21',
    keyword:['regex','정규식','정규 표현식', '띄어쓰기','스페이스 바 감지', '영문 대/소문자','숫자만', '특수문자','hasSpecialCharacters','spacesCheck','enNumberCheck']
  },
  {
    id:'utils-text',
    title:'Text, 문자 처리',
    desc:'텍스트, 문자 관련 모음',
    category:'Text', 
    modalTitle:'Regex Utils',
    modalDesc:'대/소문자, 일부 문자 비공개, 문자 처리 함수 모음',
    link:'https://github.com/TH91-Github/react-record/blob/main/src/utils/textUtils.ts',
    update:'2025-10-21',
    keyword:['Text','문자','대/소문자','capitalizeWords', 'partialUndisclosed']
  },
]
