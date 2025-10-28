import ImgArrow from 'assets/images/svg/arrow.svg';
import { reactIconsData } from "assets/svg/data/iconsData";
import { svgCodeData } from "assets/svg/data/svgCodeData";
import { ButtonDataType, IconDataType } from "types/guide/guide";

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
      id:'react-icons',
      title:'React-icons 라이브러리',
      desc:[
        '파일 경로 : /src/assets/svg/icons.ts', 
        '사용 방법 : 아이콘은 react-icons에서 개별 import한 후, icons/index.js처럼 한 곳에서 export로 관리', 
        '네이밍 : react-icons 라이브러리 아이콘 네이밍은 IconName 사용',
        '<a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" title="데모 사이트">🔗 React-icons URL</a>',
        '<a href="https://github.com/react-icons/react-icons" target="_blank" rel="noopener noreferrer" title="공식 github">🔗 github</a>',
      ],
      lists:[
        ...reactIconsData
      ]
    },
    {
      id:'svg-jsx',
      title:'svg 코드를 컴포넌트로 사용',
      desc:[
        '파일 경로 : /src/assets/svg/', 
        '사용 방법 : import { SvgName } from "assets/svg/Common"',
        '네이밍 : svg 직접 등록하는 경우 SvgName 사용'
      ],
      lists:[
        ...svgCodeData
      ]
    },
    {
      id:'svg-img',
      title:'svg 확장자로 img와 동일하게 사용',
      desc:[
        '파일 경로 : /src/assets/images/svg/', 
        `사용 방법: import 별칭 from 'assets/images/svg/파일이름.svg'`,
        '네이밍 : .svg 확장자로 된 svg 아이콘은 ImgName 사용'
      ],
      lists:[
        {
          id:'svg-img-arrow',
          title:'Arrow',
          category:'images',
          desc:['이미지','svg file','svg 이미지','화살표','arrow'],
          code:`import ImgArrow from 'assets/images/svg/arrow.svg'`,
          path:ImgArrow,
        }
      ]
    },
    {
      id:'css-icon',
      title:'css Icon',
      desc:[
        '파일 경로 : /src/assets/style/ui/iconStyle.', 
        `사용 방법: class 추가 사용`,
        '네이밍 : css를 사용하여 만들어진 아이콘 icon-name 사용'
      ],
      lists:[
        {
          id:'icon-close',
          title:'닫기 X',
          category:'css',
          desc:['닫기', 'close', '닫기 X','arrow-closed', 'X 아이콘'],
          code:`icon-close`,
          classElement:(<span className="icon-close"><span>닫기</span></span>),
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
      'button 컴포넌트 사용 ❌, <span class="color">class</span> 사용',
      '파일 경로 : /src/assets/style/ui/buttonStyle.ts',
      '최소 사이즈 40px x 40px',
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