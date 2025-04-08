import { IconDataType } from "types/guide";

export const iconData : IconDataType = {
  headData:{
    title:'Color System',
    desc:[
      '사용하는 색상의 일관성을 유지하기 위해 정의',
      '파일 경로 : /src/assets/style/variables.ts'
    ]
  },
  bodyData:[
    {
      id:'svg-jsx',
      title:'svg 코드를 JSX 컴포넌트 형식으로 사용',
      desc:['파일 경로 : /src/assets/svg/', '사용 방법 : import { SvgName } from "assets/svg/Common";'],
      lists:[
        {
          id:'colors-red',
          title:'red',
          desc:['error 강하게 강조해야 하는 부분에 사용'],
          code:'#e8392c',
        },
      ]
    }
  ]
  
  // {
  //   id:'svg-img',
  //   title:'svg 확장자로 img와 동일하게 사용 및 관리',
  //   desc:['파일 경로 : /src/assets/images/svg/', `사용 방법: import 별칭 from 'assets/images/svg/파일이름.svg';`]
  // }
}
