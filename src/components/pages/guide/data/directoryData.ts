export const directoryData  = [
  {
    id:'src',
    title:'/src',
    type:'folder',
    desc:'',
    children:[
      {
        id:'assets',
        title:'/assets',
        type:'folder',
        desc:'이미지, 아이콘, 스타일, 폰트 등',
        children:[
          {
            id:'fonts',
            title:'/fonts',
            type:'folder',
            desc:'사용 폰트 관리 (.woff2)',
          },
          {
            id:'images',
            title:'/images',
            type:'folder',
            desc:'공통 또는 사용 페이지에 맞게 폴더 생성 후 이미지',
          },
          {
            id:'style',
            title:'/style',
            type:'folder',
            desc:'글로벌 스타일, 스타일변수(Variable)',
          },
          {
            id:'svg',
            title:'/svg',
            type:'folder',
            desc:'SVG 아이콘 이미지를 컴포넌트',
          }
        ]
      },
      {
        id:'components',
        title:'/components',
        type:'folder',
        desc:'Pages 폴더 내 생성 그 외 page 담당이 아닌 컴포넌트는 components/해당폴더/생성',
        children:[
          {
            id:'common',
            title:'/common',
            type:'folder',
            desc:'기능 요소가 있는 공통 컴포넌트',
          },
          {
            id:'layout',
            title:'/layout',
            type:'folder',
            desc:'header, content, footer, 전체를 감싸는 레이아웃 컴포넌트',
          },
          {
            id:'modules',
            title:'/modules',
            type:'folder',
            desc:'재사용 가능하고 2개 이상의 컴포넌트 결합된 컴포넌트',
          },
          {
            id:'pages',
            title:'/pages',
            type:'folder',
            desc:'Router pages에서 사용하고 있는 컴포넌트 관리, 각 컴포넌트 명에 따라 폴더 구성',
          },
          {
            id:'ui',
            title:'/ui',
            type:'folder',
            desc:'UI 컴포넌트 기능은 크게 없는 단순한 UI 컴포넌트, 스타일 컴포넌트',
          }
        ]
      },
      {
        id:'hooks',
        title:'/hooks',
        type:'folder',
        desc:'커스텀 훅 파일 관리',
      },
      {
        id:'pages',
        title:'/pages',
        type:'folder',
        descList:'router에 설정된 page 컴포넌트 파일을 관리하고 파일명 마지막에는 Page를 붙인다.',
      },
      {
        id:'recoil',
        title:'/recoil',
        type:'folder',
        desc:'UI와 관련된 전역 변수 및 로컬 데이터를 관리하는 데 사용하는 recoil 관련 파일',
      },
      {
        id:'reducers',
        title:'/recoil',
        type:'folder',
        desc:'API 데이터 상태 관리하는데 사용하는 redux 관련 파일 포함',
        children:[
        ]
      },
      {
        id:'routes',
        title:'/routes',
        type:'folder',
        desc:'라우터 설정과 경로에 따른 컴포넌트 목록 파일 포함',
        children:[
        ]
      },
      {
        id:'stories',
        title:'/stories',
        type:'folder',
        desc:'React Storybook 컴포넌트 파일 관리',
        children:[
        ]
      },
    ]
  },
  {
    id:'app',
    title:'/App.tsx',
    type:'tsx',
    desc:'GlobalStyles과 header, content, footer 컴포넌트 사용',
  },
  {
    id:'index',
    title:'/indx.tsx',
    type:'tsx',
    desc:'redux, recoil, router 적용',
  }
]