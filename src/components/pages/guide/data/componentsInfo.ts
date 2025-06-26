import { ComponentsInfoType } from "types/guide"

// 모달 code 
export const modalData : ComponentsInfoType = {
  info:{
    id:'modal-info',
    title:'Modal 컴포넌트',
    desc:'가로 크기, 정렬, 자동 닫기, 모달 중첩, 포커스 이동 및 이탈 방지 기능이 포함되어 있습니다.'
  },
  link:[
    {
      id:'modal-github',
      title:'모달 컴포넌트 github',
      code:'<Modal />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Modal.tsx'
    },
    {
      id:'modal-hook',
      title:'모달 사용 Hook github',
      code:'useBodyScrolLock',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/common.ts'
    }
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:
    `
    <Modal onClose={handlePopupClick}>
      <p>Madal Test</p>
    </Modal>
    `,
    },
    {
      id:'code-tsx',
      title:'TSX',
      lang:'typescript',
      code:
    `
    interface ModalPropsType {
      isDimmed?: boolean; // dimmed on/off EX: 2중 모달 시 
      isUnder?: boolean, // 2중 모달일 경우 딤드보다 아래로
      $width?: number,
      $align?: 'center' | 'left' | 'right';
      children?:React.ReactNode;
      onClose: () => void;
    }

    export const Modal = ({
      isDimmed = true,
      isUnder,
      $width = 250,
      $align = 'center',
      children,
      onClose
    }:ModalPropsType) => {
    ...
    const { lockScroll, unlockScroll } = useBodyScrolLock(); // 스크롤 lock

    // 포커스 이탈 방지
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      ...
    }

    // 닫기
    const handleCloseClick = () => {
      ...
    }
    
    return (
        createPortal(
          <div className="modal-wrap">
            <div className="modal-inner">
              {children}
              ...
            </div>
            <div className="dimmed"></div>
          </div>,
          document.body
        )
      )
    }
    `
    },
    {
      id:'code-css',
      title:'CSS',
      lang:'css',
      code:
    `
    .modal-wrap{
      position:fixed;
      z-index:100;
      top:0;
      left:0;
      width:100svw;
      height:100svh;
      text-align: \${({$align}) => $align};
    }

    .modal-inner{
      position:absolute;
      z-index:102;
      top:50%;
      left:50%;
      width: \${({ $width }) => $width}px;
      max-width:80%;
      padding:30px;
      border-radius:5px;
      background: #fff;
      box-shadow: rgba(17,19,32,0.2) 1px 1px 6px;
      transform: translate(-50%, -50%);
      .icon-close {
        top:10px;
        right:10px;
      }
    }

    .modal-wrap.under {
      .modal-inner{
        z-index:90;
      }
    }

    .dimmed {
      position: absolute;
      z-index:101;
      top:0;
      left:0;
      width:100%; 
      height:100%;
      background: rgba(0,0,0,0.5);
    }
    `
    }
  ]
}

// 캐러셀 code
export const carouselData : ComponentsInfoType = {
  info:{
    id:'carousel-info',
    title:'carousel 컴포넌트',
    desc:'Swiper.js 기반 컴포넌트, swiper 옵션과 사용자 맞춤 추가 옵션을 사용하고 있습니다.'
  },
  link:[
    {
      id:'carousel-github',
      title:'carousel github',
      code:'<Carousel />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Carousel.tsx'
    },
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:
    `
    <Carousel carouselOpt={{ 옵션:true}}>
      {data.map((slideItem,idx))=> (
        <div key={idx}>{slideItem}</div> 
      )}
    </Carousel>
    `,
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'typescript',
      code:
    `
    `
    },
  ]
}

// toast popup
export const toastData : ComponentsInfoType = {
  info:{
    id:'toast-info',
    title:'toast 컴포넌트',
    desc:'화면 EX) 하단에 잠시 노출 후 사라지는 형태, 메시지를 전달하는 데 사용.'
  },
  link:[
    {
      id:'toast-component',
      title:'컴포넌트 code',
      code:'github - <Toast />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Toast.tsx'
    },
    {
      id:'toast-hook',
      title:'훅 code',
      code:'useToast()',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/hooks/useToast.ts'
    },
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:
    `
    const { addToast } = useToast();
    // 메시지 
    addToast('메시지')
    // 메시지 + 타입
    addToast('메시지', 'sucess')
    // 메시지 + 타입 + 유지 시간
    addToast('메시지', 'sucess', 3000)
    `,
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'html',
      code:`https://github.com/TH91-Github/react-record/blob/main/src/components/common/Toast.tsx`
    },
  ]
}


// Tab Btn 
export const tabBtnsData : ComponentsInfoType = {
  info:{
    id:'tabBtns-info',
    title:'TAB Button 컴포넌트',
    desc:'TAB 버튼 스타일'
  },
  link:[
    {
      id:'tabBtns-component',
      title:'컴포넌트 code',
      code:'github - <TabBtns />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/TabBtns.tsx'
    },
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:`
        <TabBtns 
          data={tabBtns} 
          changeEvent={(e) => handleTabOnChange(e, 1)}
        />
      `
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'html',
      code:
    `
      https://github.com/TH91-Github/react-record/blob/main/src/components/common/TabBtns.tsx
    `
    },
  ]
}