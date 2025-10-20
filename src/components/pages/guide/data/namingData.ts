export const namingConventionsData = {
  title:'네이밍 컨벤션 표기법',
  url:'https://th91.tistory.com/28',
  desc:'코드 작성 시 일관성과 가독성을 위해 변수명, 함수명, 클래스명 등을 명확하고 규칙적으로 작성하는 방법',
  lists:[
    {
      tit:'카멜 케이스',
      enTit:'camelCase',
      descLists:[
        '첫 단어는 소문자로 시작하고 이후 단어의 첫 글자를 대문자로 작성하는 방식',
        'JavaScript/TypeScript 변수명, 함수명, React props, 객체 속성명, 메서드 이름'
      ],
      codeLists:[
        'userName', 'firstName', 'handleClick', 'isLoading'
      ]
    },
    {
      tit:'파스칼 케이스',
      enTit:'PascalCase',
      descLists:[
        '모든 단어의 첫 글자를 대문자로 작성하는 방식',
        'React/Vue 컴포넌트 이름, 클래스 이름 (Java, C#, TypeScript), 인터페이스 이름 (TypeScript),타입 정의 (TypeScript)'
      ],
      codeLists:[
        'UserProfile', 'NavigationBar', 'ProductCard', 'ReactComponent'
      ]
    },
    {
      tit:'케밥 케이스',
      enTit:'kebab-case',
      descLists:[
        '모든 단어를 소문자로 작성하고 하이픈(-)으로 연결',
        'HTML 태그 속성, CSS 클래스명, URL 경로, 파일명 (Vue 컴포넌트), npm 패키지명'
      ],
      codeLists:[
        'main-container', 'user-profile', 'navigation-bar', 'button-component'
      ]
    },
    {
      tit:'스네이크 케이스',
      enTit:'snake_case',
      descLists:[
        '모든 단어를 밑줄(_)를 사용하여 단어를 구분하는 방',
        'Ruby 변수명과 메서드명, Python 변수명과 함수명, PHP 변수명, SQL 테이블명과 컬럼명, 일부 설정 파일'
      ],
      codeLists:[
        'user_name', 'fetch_data', 'file_path'
      ]
    },
    {
      tit:'스크리밍 스네이크 케이스',
      enTit:'SCREAMING_SNAKE_CASE',
      descLists:[
        '모든 단어를  대문자로만 작성하고 밑줄 (_)로 단어를 구분하는 방식',
        '가독성이 좋고, 변하지 않는 값을 강조할 때 적합',
        '상수값 (JavaScript, Java, Python 등), 환경 변수, 매크로 (C/C++), 열거형(enum) 값'
      ],
      codeLists:[
        'MAX_USER_COUNT', 'API_URL', 'API_KEY' 
      ]
    },
    {
      tit:'헝가리안 표기법',
      enTit:'Hungarian Notation',
      descLists:[
        '변수명 앞에 데이터 타입을 접두어로 붙이는 방식',
        '요즘은 잘 사용되지 않음, 레거시 Windows API, 오래된 C/C++ 코드, 일부 기업 내부 코딩 표준',
        '접두어 예시 - numAge : 숫자(number), strUserName 문자열(string), bIsActive (불리언), arrItems (배열)'
      ],
      codeLists:[
        'numAge', 'strUserName', 'bIsActive', 'arrItems'
      ]
    }
  ]
}

export const namingData = [
  {
    id:'naming-guidelines',
    title:'추천 네이밍',
    desc:[
      'open → 접고 펼치는 경우',
      'on → 특정 상태나 기능이 활성화될 때 사용',
      'active → 항목을 활성화할 때',
      'title, tit → 타이틀',
      'desc → 설명이 포함된 텍스트',
      'text → 일반 텍스트',
      'lists → 목록이 있는 경우',
      'box → 소규모 컨텐츠를 감싸는 경우',
      'info → 상세 정보를 포함한 경우',
      'select → 가장 기본적인 선택',
      'selected → 선택된 상태',
      'choose → 여러 옵션 중 하나를 고를 때',
      'check → 체크박스 등에서 선택할 때',
      'filter → 특정 조건을 만족하는 항목만 선택할 때',
      'update → 기존 데이터를 수정할 때',
      'modify → 일부 내용을 변경할 때',
      'replace → 기존 값을 새로운 값으로 완전히 교체할 때',
      'loading → 로딩 중일 때',
      'disabled → 비활성화된 상태일 때',
      'error → 오류 발생 시',
      'success → 성공적인 상태일 때',
      'hidden → 숨겨진 상태일 때',
      'focus → 포커스가 맞춰진 상태',
      'highlighted → 강조된 항목',
      'empty → 비어 있는, 없는 상태', 
      'formatText → 특정 규칙에 맞춰 재구성, 새로운 형태,',
      'token → 고유 token, import 가능한 코드',
      'code → 코드 관련',
      'confirm → 확인, 확정',
      'cancel → 취소', 
      'close → 닫기', 
      '...'
    ],
  },
  {
    id:'naming-class',
    title:'클래스 규칙 (Class)',
    desc:[
      '스타일 일관성을 위해 공통 클래스를 정의',
      '클래스명은 역할에 맞게 직관적으로 구성',
      '타이틀, 텍스트 등의 기본적인 스타일을 포함',
      '케밥 케이스 kebab-case로 작성'
    ],
    section:[
      {
        sectionTit:'타이틀, 텍스트 Class',
        lists:[
          {
            tit:'h 태그를 사용한 타이틀 -> .title',
            desc: 'h1~h6에 .title을 별도 클래스 사용 (header-title ❌ / .title ✅)',
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
          },
        ]
      },
      {
        sectionTit:'전체와 영역을 감싸는 구조 layout',
        lists:[
          {
            tit: '&-wrap',
            desc: 'page 내 가장 전체를 감싸는 layout / 주로 페이지의 전체 구조를 정의하는 데 사용'
          },
          {
            tit: '&-inner',
            desc: 'wrap 하위 영역. 주로 가운데 정렬된 컨텐츠나 페이지의 주요 콘텐츠가 위치하는 부분'
          },
          {
            tit: '.section-, &-section',
            desc: '페이지의 주요 구획을 나누는 영역. 예를 들어, 헤더, 본문, 푸터 등 주요 섹션을 정의'
          },
          {
            tit: '.header-, &-heading, .heading',
            desc: '페이지의 상단 헤더 영역 / 네비게이션 바나 로고 등을 포함'
          },
          {
            tit: '.content-, &-cont',
            desc: '본문 내용이 포함되는 영역 /페이지의 주요 콘텐츠가 위치하는 곳'
          },
        ]
      },
      {
        sectionTit:'특정 요소를 묶는 layout',
        lists:[
          {
            tit: '&-lists',
            desc: '관련된 항목들을 묶는 영역 / 주로 목록이나 리스트 형태의 콘텐츠를 포함'
          },
          {
            tit: '&-item',
            desc: '목록 또는 컨테이너 내 개별 항목 / 각 아이템을 정의하는 데 사용'
          },
          {
            tit: '&-box',
            desc: '어떤 콘텐츠나 요소를 감싸는 컨테이너 역할'
          },
          {
            tit: '&-info',
            desc: '정보 제공을 목적으로 하는 영역에 사용'
          },
          {
            tit: '&-description',
            desc: '설명글이나 텍스트로 이루어진 정보를 포함하는 부분'
          },
          {
            tit: '.img',
            desc:'이미지를 포함하는 요소를 스타일링할 때 사용'
          },
          {
            tit: '.icon',
            desc:'svg, icon으로 사용하는 요소를 감싸거나 스타일링할 때 사용'
          }
        ]
      },
      {
        sectionTit:'UI & 상태에 따른 class',
        lists:[
          {
            tit:'특별한 기능 없이 공통 스타일 목적으로 만들어진 글로벌 UI',
            desc:'-ui 끝나는 네이밍으로 하며 공통적인 스타일을 적용하기 위한 UI 스타일'
          },
          {
            tit:'button class',
            desc:'btn, btn-primary, btn-submit, btn-icon, 목적, 상태에 따라 -을 사용하여 구분'
          },
          {
            tit:'숨기거나 감추는 목적 class',
            desc:'hide, -hide 사용 ※ .blind 클래스는 스크린 리더 전용으로, 화면에서는 보이지 않지만 내용을 읽을 수 있도록 사용중'
          }
        ]
      }
    ], 
  },
  {
    id:'naming-folder',
    title:'파일 및 폴더 규칙 (Folder & File)',
    desc:[
      '명확하고 일관된 네이밍으로 가독성을 높이고 유지보수, 효율성을 높이기 위해',
      '파일의 목적을 쉽게 파악할 수 있기 위해',
    ],
    section:[
      {
        sectionTit:'폴더 네이밍',
        lists:[
          {
            tit:'소문자 사용',
            desc: '폴더 이름은 모두 소문자로 작성하여 일관성 있게 유지',
            codeLists:['components','assets','pages','hooks','routes']
          },
          {
            tit:'하이픈(-) 구분',
            desc: '여러 단어로 이루어진 폴더 이름은 하이픈(-)을 사용하여 구분',
            codeLists:['user-profile/', 'product-list/']
          },
          {
            tit:'기능 중심',
            desc: '폴더 이름은 그 폴더 안에 포함된 파일들의 기능을 반영하기',
            codeLists:['hooks/', 'components/','utils/', 'pages/']
          },
        ]
      },
      {
        sectionTit:'파일 네이밍 규칙',
        lists:[
          {
            tit:'컴포넌트',
            desc: 'React 컴포넌트 파일은 PascalCase를 사용하여 이름을 작성',
            codeLists:['GuidePage.jsx','NamingContent.tsx']
          },
          {
            tit:'라우터 지정 컴포넌트',
            desc: 'Router path 경로로 설정한 컴포넌트는 마지막에 page를 붙인다. * App 제외',
            codeLists:['GuidePage.jsx','ErrorPage.tsx']
          },
          {
            tit: 'TypeScript 파일',
            desc: '첫 글자가 대문자인 PascalCase 파스칼 케이스로 작성하며, 설정 파일이나 타입 정의 파일에 주로 사용',
            codeLists: ['UserType.ts', 'CommonType.ts']
          },
          {
            tit: '유틸리티 및 데이터 파일',
            desc: '유틸리티 함수와 데이터 관련 파일은 소문자와 하이픈(-) 구분을 사용하여 작성',
            codeLists: ['user-data.js', 'utils.ts']
          },
          // hook, router, 등 각 기능에 따른 파일 규칙 필요성
          {
            tit: '함수 모음 파일',
            desc: '공통으로 사용이 가능함 함수 크게는 전역 작게는 컴포넌트 단위로 소문자와 하이픈(-) 구분을 사용하여 작성',
            codeLists: ['common.js','weather.js', 'calculate-price.ts']
          },
          {
            tit:'상수 파일',
            desc: '상수 값이 정의된 파일은 모두 대문자와 스네이크 케이스를 사용하여 작성',
            codeLists: ['MAX_LENGTH.js', 'DEFAULT_CONFIG.ts']
          },
        ]
      },
      {
        sectionTit:'확장자',
        lists:[
          {
            tit:'일반 컴포넌트 파일',
            desc: 'React 컴포넌트는 `.jsx` 확장자를 사용하여 생성합니다.',
            codeLists:['App.jsx','GuidePage.jsx']
          },
          {
            tit:'타입스크립트 컴포넌트 파일',
            desc: 'TypeScript가 적용된 React 컴포넌트는 `.tsx` 확장자를 사용하여 생성합니다.',
            codeLists:['App.tsx','GuidePage.tsx']
          },
          {
            tit: '일반 JavaScript 파일 .js',
            desc: 'JavaScript로 작성된 파일은 `.js` 확장자를 사용합니다.',
            codeLists: ['common.js', 'utils.js']
          },
          {
            tit: '타입스크립트 파일 .ts',
            desc: 'TypeScript로 작성된 파일은 `.ts` 확장자를 사용합니다.',
            codeLists: ['common.ts', 'utils.ts']
          }
        ]
      }
    ], 
  },
  {
    id:'naming-styled',
    title:'Style 규칙 (style)',
    desc:[
      'CSS 작성 순서',
      '태그 및 스타일에 대한 설명',
      'Styled-components 네이밍 및 가이드',
    ],
    section: [
      {
        sectionTit: "CSS 작성 순서",
        lists: [
          {
            tit: "스타일 작성 순서 기준",
            desc: "코드를 읽기 쉽고 일관되게 유지하기 위해 CSS 속성은 기능에 따라 순서를 정해 작성",
            codeLists: ["overflow",'display','position','크기(width, height)','여백(margin,padding)','테두리(border)','배경(background)','폰트(font)','기타']
          }
        ]
      },
      {
        sectionTit: "Styled-components",
        lists: [
          {
            tit: "StyleWrap 네이밍",
            desc: "컴포넌트 내 최상위 태그는 StyleWrap 로 네이밍 통일",
            codeLists: ["const StyleWrap => styled.tag`"]
          },
          {
            tit: "공통 스타일",
            desc: "GlobalStyles에 작성 또는 공통 부모내 공통으로 작성 시 부모 컴포넌트에 작성",
            codeLists: []
          }
        ]
      },
    ]
  },
  {
    id:'naming-variable',
    title:'변수 규칙 (Variable)',
    desc:[
      '변수명은 명확하고 직관적으로 작성해야 하며, 의미 있는 이름을 사용',
    ],
    // useState, ref 등등
  },
  {
    id: "naming-function",
    title: "함수 규칙 (Function)",
    desc: [
      "카멜 케이스(camelCas)로 작성",
      "선언은 const를 사용하여 재할당 방지",
      "컴포넌트 내/외 함수",
      "이벤트, 커스텀, 동작 등 함수에 대한 네이밍",
    ],
    section: [
      {
        sectionTit: "네이밍 스타일 가이드",
        lists: [
          {
            tit: "동작을 나타내는 동사 사용",
            desc: "get, set, fetch, update, remove, clear 등을 활용하여 함수의 역할을 명확하게 표현합니다.",
            codeLists: [
              "function getUserData() {...}",
              "function updateProfile() {...}",
              "function clearCache() {...}"
            ]
          },
          {
            tit: "불린 값 반환 함수는 is 또는 has 접두어 사용",
            desc: "불린 값을 반환하는 함수는 is 또는 has 접두어를 사용하여 명확하게 구분합니다.",
            codeLists: [
              "function isUserLoggedIn() {...}",
              "function hasPermission() {...}"
            ]
          }
        ]
      },
      {
        sectionTit: "React 내장 함수는 화살표 함수로 선언",
        lists: [
          {
            tit: "React 내장 함수 useState, useEffect 등 포함한다면 화살표 함수",
            desc: "React의 useState, useEffect 등 내장 Hook을 사용하려면 화살표 함수로 선언하는 것으로 합니다.",
            codeLists: ["const useFetchData = () => {...}"]
          }
        ]
      },
      {
        sectionTit: "컴포넌트 내 함수",
        lists: [
          {
            tit: "컴포넌트 내에 함수는 화살표 함수",
            desc: "컴포넌트 내부에서만 사용하는 함수는 화살표 함수로 선언. this 바인딩 문제를 피할 수 있으며, 일관된 코드를 유지할 수 있습니다.",
            codeLists: ["const handleClick = () => {...}"]
          }
        ]
      },
      {
        sectionTit: "유틸리티 함수 & 외부 함수",
        lists: [
          {
            tit: "컴포넌트 외부에 있는 함수는 function 키워드로 선언합니다.",
            desc: "유틸 함수나 API 함수 등 재사용되는 함수는 function 키워드를 사용하여 선언",
            codeLists: ["function fetchUser(date) {...}", "function userData() {...}"]
          }
        ]
      },
      {
        sectionTit: "이벤트 핸들러",
        lists: [
          {
            tit: "이벤트 핸들러는 handle 접두어를 사용",
            desc: "이벤트 핸들러 함수는 handle 접두어를 붙여 직관적으로 알 수 있도록 합니다.",
            codeLists: ["const handleInputChange = () => {...;","const handleClick () => {...}"]
          }
        ]
      },
      {
        sectionTit: "커스텀 훅",
        lists: [
          {
            tit: "커스텀 훅 화살표 함수와 use 접두어를 사용",
            desc: "리액트의 규칙(Rules of Hooks)을 준수하며, 훅임을 명확하게 식별할 수 있도록 use 접두어를 사용합니다.",
            codeLists: [
              "const useFetchData(url) = () => {...}", "const useLocationPath = () => {...}"
            ]
          }
        ]
      },
    ]
  },
  {
    id:'naming-props',
    title:'속성 규칙 (Props)',
    desc:[
      'props',
    ],
    section:[
      {
        sectionTit: "객체 및 배열 데이터",
        lists: [
          {
            tit: "data로 통일",
            desc: "userData, listsData처럼 중복된 명칭 대신 data로 명확하게 표현합니다.",
            codeLists: ["data"]
          }
        ]
      },
      {
        sectionTit: "Props 이벤트 핸들러 함수",
        lists: [
          {
            tit: "접미어(Event) 사용",
            desc: "이벤트 핸들러 함수는 handle 접두어를 사용하고, 이벤트 객체는 의미에 따라 접미어로 Event를 붙여 명확하게 구분합니다.",
            codeLists: ["changeEvent, clickEvent"]
          }
        ]
      },
    ]
  },
  {
    id:'naming-type',
    title:'타입 규칙 (Type)',
    desc:[
      '로컬 타입 지정일 경우 컴포넌트 파일 내 정의',
      '2곳 이상 사용 시 공통 /types/ 폴더 내 해당 파일에 정의',
      'type 공통 파일 생성 시 camelCase.ts',
      '타입 지정은 PascalCase'
    ],
    section:[
      {
        sectionTit:'일반 타입 지정 순서',
        lists:[
          {
            tit:'기본 타입 정렬',
            desc: 'type Example = number | boolean | string | null | undefined;<br /> 숫자 → 불리언 → 문자열 → null/undefined 순서로 정리',
          },
        ]
      },
      {
        sectionTit:'객체 포함 타입 정렬',
        lists:[
          {
            tit:'기본 타입 정렬',
            desc: 'type Example = number | boolean | string | null | undefined | object | (() => void);<br /> 기본 타입 → 객체 → 함수 순서',
          },
        ]
      },
      {
        sectionTit:'유니온 타입 정렬',
        lists:[
          {
            tit:'기본 타입 정렬',
            desc: 'type Status = "loading" | "success" | "error" | boolean | null;<br /> 리터럴 값 → 불리언 → null 순서',
          },
        ]
      }
    ]
    // data, props, components
  },
  {
    id:'naming-hook',
    title:'훅 규칙 (Hook)',
    desc:[
      '폴더명은 hook 시작',
    ],
    section:[
      
    ]
  }
]