import { SvgTistory } from "assets/svg/BrandLogo";
import { SvgArrow, SvgBook, SvgClipboard, SvgCode, SvgComponent, SvgCube, SvgDesign, SvgFolder, SvgPuzzle, SvgRectangleStack, SvgSearch, SvgSetting, SvgSquareStack } from "assets/svg/Common";
import { ButtonDataType, IconDataType } from "types/guide";
import ImgArrow from 'assets/images/svg/arrow.svg';

export const iconData : IconDataType = {
  headData:{
    title:'Icon System',
    desc:[
      '일관된 아이콘 사용을 위해 사용하는 아이콘 정리',
      '사용 목적에 따라 SVG(JSX컴포넌트) 또는 이미지(file) 형태로 사용'
    ]
  },
  bodyData:[
    {
      id:'svg-jsx',
      title:'svg 코드를 JSX 컴포넌트 형식으로 사용',
      desc:['파일 경로 : /src/assets/svg/', '사용 방법 : import { SvgName } from "assets/svg/Common"'],
      lists:[
        {
          id:'svg-jsx-search',
          title:'Search',
          category: 'Common',
          desc:['검색', 'magnifying-glass', 'search'],
          code: 'SvgSearch',
          element: SvgSearch,
        },
        {
          id:'svg-jsx-search',
          title:'Code',
          category: 'Common',
          desc:['코드', 'code-bracket', 'code'],
          code: 'SvgCode',
          fill:true,
          element: SvgCode,
        },
        {
          id:'svg-jsx-search',
          title:'Arrow',
          category: 'Common',
          desc:['arrow','< >','chevron','화살표','방향'],
          code: 'SvgArrow',
          element: SvgArrow,
        },
        {
          id:'svg-jsx-search',
          title:'Cube',
          category: 'Common',
          desc:['큐브', 'cube-transparent', 'cube'],
          code: 'SvgCube',
          fill:true,
          element: SvgCube,
        },
        {
          id:'svg-jsx-search',
          title:'Book',
          category: 'Common',
          desc:['book','규칙','책','open'],
          code: 'SvgBook',
          element: SvgBook,
        },
        {
          id:'svg-jsx-search',
          title:'Clipboard',
          category: 'Common',
          desc:[ '클립보드','clipboard-document-list'],
          code: 'SvgClipboard',
          element: SvgClipboard,
        },
        {
          id:'svg-jsx-search',
          title:'Folder',
          category: 'Common',
          desc:['폴더', 'folder', '파일'],
          code: 'SvgFolder',
          element: SvgFolder,
        },
        {
          id:'svg-jsx-search',
          title:'Component',
          category: 'Common',
          desc:['컴포넌트','cube','box'],
          code: 'SvgComponent',
          fill: true,
          element: SvgComponent,
        },
        {
          id:'svg-jsx-search',
          title:'SquareStack',
          category: 'Common',
          desc:['컴포넌트','square','stack'],
          code: 'SvgSquareStack',
          element: SvgSquareStack,
        },
        {
          id:'svg-jsx-search',
          title:'Puzzle',
          category: 'Common',
          desc:['퍼즐','puzzle-piece','도구'],
          code: 'SvgPuzzle',
          element: SvgPuzzle,
        },
        {
          id:'svg-jsx-search',
          title:'Setting',
          category: 'Common',
          desc:['세팅', '수정','편집','preferences','환경설정'],
          code: 'SvgSetting',
          element: SvgSetting,
        },
        {
          id:'svg-jsx-search',
          title:'Design',
          category: 'Common',
          desc:['디자인','Design','color','font','breakpoints'],
          code: 'SvgDesign',
          element: SvgDesign,
        },
        {
          id:'svg-jsx-search',
          title:'RectangleStack',
          category: 'Common',
          desc:['박스 여러개', 'style','rectangle-stack', '모음'],
          code: 'SvgRectangleStack',
          element: SvgRectangleStack,
        },
        {
          id:'svg-jsx-tistory',
          title:'티스토리',
          category:'BrandLogo',
          desc:['티스토리','TISTORY','스토리','story','Tattertools+history'],
          code:'SvgTistory',
          fill:true,
          element: SvgTistory,
        }
      ]
    },
    {
      id:'svg-img',
      title:'svg 확장자로 img와 동일하게 사용 및 관리',
      desc:['파일 경로 : /src/assets/images/svg/', `사용 방법: import 별칭 from 'assets/images/svg/파일이름.svg'`],
      lists:[
        {
          id:'svg-jsx-tistory',
          title:'Arrow',
          category:'images',
          desc:['이미지','svg file','svg 이미지','화살표','arrow'],
          code:`import ImgArrow from 'assets/images/svg/arrow.svg'`,
          path:ImgArrow,
        }
      ]
    }
  ]
}

export const buttonData : ButtonDataType = {
  headData : {
    title:'Button System',
    desc:[
      '공통적으로 사용하는 버튼 리스트',
      '목적에 따라 버튼 스타일 제공',
      'button 컴포넌트 사용 ❌, <span class="color">class</span>로 제어',
      '파일 경로 : /src/assets/style/ui/buttonStyle.ts',
      '최소 사이즈 44px x 44px',
      '<span class="color">필수 구조</span> : button > span'
    ]
  },
  bodyData:[
    {
      id:'button-base',
      title:'기본 .btn 클래스와 유형별',
      desc:['hover, focus 기본 옵션','추가 디테일 수정은 사용 컴포넌트 내에서 진행'],
      category:'base',
      lists:[
        {
          id:'button-btn',
          title:'btn',
        },
        {
          id:'button-btn-disabled',
          title:'btn disabled',
        },
        {
          id:'button-btn-ellipsis',
          title:'btn ellipsis Test',
        },
        {
          id:'button-btn-full',
          title:'btn full',
        },
        {
          id:'button-btn-',
          title:'btn skeleton-item',
        },
      ]
    },
    {
      id:'button-primary',
      title:'btn-primary',
      desc:['시각적 우선 순위 버튼','배경색이 있는 버튼'],
      category:'base',
      lists:[
        {
          id:'button-btn',
          title:'btn btn-primary',
        },
        {
          id:'button-btn-disabled',
          title:'btn btn-primary disabled',
        },
        {
          id:'button-btn-ellipsis',
          title:'btn btn-primary ellipsis',
        },
        {
          id:'button-btn-full',
          title:'btn btn-primary full',
        },
        {
          id:'button-btn-',
          title:'btn btn-primary skeleton-item',
        },
      ]
    },
    {
      id:'button-line',
      title:'btn-line',
      desc:['기본과 다른 border 색상 차이', 'hover & focus 시 배경색'],
      category:'base',
      lists:[
        {
          id:'button-btn',
          title:'btn btn-line',
        },
        {
          id:'button-btn-disabled',
          title:'btn btn-line disabled',
        },
        {
          id:'button-btn-ellipsis',
          title:'btn btn-line ellipsis',
        },
        {
          id:'button-btn-full',
          title:'btn btn-line full',
        },
        {
          id:'button-btn-',
          title:'btn btn-line skeleton-item',
        },
      ]
    },
    {
      id:'button-gray',
      title:'btn-gray',
      desc:['Gray 배경색 버튼','primary 반대 의미 기능 사용'],
      category:'base',
      lists:[
        {
          id:'button-btn',
          title:'btn btn-gray',
        },
        {
          id:'button-btn-disabled',
          title:'btn btn-gray disabled',
        },
        {
          id:'button-btn-ellipsis',
          title:'btn btn-gray ellipsis',
        },
        {
          id:'button-btn-full',
          title:'btn btn-gray full',
        },
        {
          id:'button-btn-',
          title:'btn btn-gray skeleton-item',
        },
      ]
    }
  ]
}