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
      code:'github - <Modal />',
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
      code:`
      <Modal onClose={handlePopupClick}>
        <p>Madal Test</p>
      </Modal>
      `,
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'txt',
      code:`https://github.com/TH91-Github/react-record/blob/main/src/components/common/Modal.tsx`
    },
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
      code:'github - <Carousel />',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Carousel.tsx'
    },
  ],
  codeData:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:`
      <Carousel carouselOpt={{ 옵션:true}}>
        {data.map((slideItem,idx))=> (
          <div key={idx}>{slideItem}</div> 
        )}
      </Carousel>
      `
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'txt',
      code:`https://github.com/TH91-Github/react-record/blob/main/src/components/common/Carousel.tsx`
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
      code:`
        const { addToast } = useToast();
        // 메시지 
        addToast('메시지')
        // 메시지 + 타입
        addToast('메시지', 'sucess')
        // 메시지 + 타입 + 유지 시간
        addToast('메시지', 'sucess', 3000)
        // base, sucess, error
      `,
    },
    {
      id:'code-url',
      title:'TSX & CSS',
      lang:'txt',
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
      lang:'txt',
      code:`https://github.com/TH91-Github/react-record/blob/main/src/components/common/TabBtns.tsx`
    },
  ]
}