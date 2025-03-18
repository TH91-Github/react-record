
// 폴더 하이픈 케밥 케이스

// 파일 및 폴더 네이밍 (예: camelCase, kebab-case, PascalCase)
// 컴포넌트 네이밍 (예: ButtonPrimary, ModalContainer)
// 상태 및 변수 네이밍 (예: isLoading, userList)
// 함수 네이밍 (예: handleClick, fetchUserData)
export const namingData = [
  {
    id:'naming-class',
    title:'Class',
    desc:[
      '스타일 일관성을 위해 공통 클래스를 정의',
      '클래스명은 역할에 맞게 직관적으로 구성',
      '타이틀, 텍스트 등의 기본적인 스타일을 포함',
    ],
    section:[
      {
        sectionTit:'타이틀, 텍스트 Class',
        lists:[
          {
            tit:'h 태그를 사용한 타이틀 -> .title',
            desc: 'h1~h6에 .title을 별도 클래스 사용 (header-title ❌)',
          },
          {
            tit:'일반 태그 타이틀 -> .tit',
            desc: 'h 태그가 아닌 요소의 타이틀용 (별도 클래스 .tit 사용)',
          },
          {
            tit:'제목과 소제목 있는 경우 -> .tit-s',
            desc: '일반 태그에서 메인 타이틀(.tit)과 서브 타이틀(.tit-s) 구분',
          },
          {
            tit:'설명(description) -> .desc',
            desc:'보조 설명 또는 부가 정보 스타일 적용 (.desc 사용)',
          },
          {
            tit:'텍스트 (Text) -> .txt',
            desc:'설명(.desc)과 구분되는 일반적인 글자 (.txt 사용)'
          }
        ]
      }
    ], 
  },
  {
    id:'naming-class',
    title:'Class',
    desc:[
      '스타일 일관성을 위해 공통 클래스를 정의',
      '클래스명은 역할에 맞게 직관적으로 구성',
      '타이틀, 텍스트 등의 기본적인 스타일을 포함',
    ],
    section:[
      {
        sectionTit:'타이틀, 텍스트 Class',
        lists:[

        ]
      }
    ]
  }
]