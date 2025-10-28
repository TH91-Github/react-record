
// 🔹 moduleData 컴포넌트 + 컴포넌트 조합

import { ComponentsInfoType } from "types/guide/guide";

// search 검색 입력 input 모듈
export const searchModuleData : ComponentsInfoType = {
  info:{
    id:'search-module-info',
    title:'Search Module',
    desc:'검색 모듈, input, 하이라이트 옵션 등'
  },
  link:[
    {
      id:'input-component',
      title:'컴포넌트 code',
      code:'github - <InputText />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/InputText.tsx'
    },
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:`
        
      `
    },
  ]
}