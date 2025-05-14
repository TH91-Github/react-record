import { ComponentsDataType } from "types/guide";

export const componentsData: ComponentsDataType[] =[
  {
    id:'modal',
    title:'Modal',
    desc:'공통 모달 컴포넌트',
    category:'Modal', 
    update:'2025-04-16',
    keyword:['Modal','Modal','딤드','알럿','alert', '모달']
  },
  {
    id:'carousel',
    title:'Carousel',
    desc:'캐러셀, 슬라이드 컴포넌트',
    category:'Carousel', 
    update:'2025-04-16',
    keyword:['Carousel', '슬라이드', 'swiper', '캐러셀']
  },
  {
    id:'tab-button',
    title:'Tab Button',
    desc:'Tab 버튼 컴포넌트',
    category:'Tab', 
    update:'2025-04-16',
    keyword:['Carousel dasdasd', 'Tab', 'Tabs', 'Tab Button', '탭 버튼', 'Tab Head' ,'탭 헤더']
  },
]

// 컴포넌트 code 
export const viewCode = {
  modal:[
    {
      id:'code-use',
      title:'사용 예제',
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
      onClose: () => void; // ✅ 닫기 필수
    }

    export const Modal = ({
      isDimmed = true,
      isUnder,
      $width = 250,
      $align = 'center',
      children,
      onClose
    }:ModalPropsType) => {
    const handleCloseClick = () => {
      onClose();
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
      text-align: center;
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
      .close-btn {
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