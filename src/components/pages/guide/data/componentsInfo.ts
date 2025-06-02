import { ComponentsInfoType } from "types/guide"

// 모달 code 
export const modalData : ComponentsInfoType = {
  info:{
    id:'modal-info',
    title:'Modal 컴포넌트',
    desc:'가로 크기, 정렬, 자동 닫기, 모달 중첩, 포커스 이동 및 이탈 방지 기능이 포함되어 있습니다.'
  },
  hook:[
    {
      id:'modal-hook-1',
      title:'useBodyScrolLock()',
    }
  ],
  link:[
    {
      id:'modal-github',
      title:'github',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Modal.tsx'
    },
    {
      id:'modal-storybook',
      title:'storybook',
      link:null
    }
  ],
  code:[
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
  hook:[
  ],
  link:[
    {
      id:'carousel-github',
      title:'github',
      link:'https://github.com/TH91-Github/react-record/blob/main/src/components/common/Carousel.tsx'
    },
    {
      id:'modal-storybook',
      title:'storybook',
      link:null
    }
  ],
  code:[
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
      id:'code-tsx',
      title:'TSX',
      lang:'typescript',
      code:
    `
    const DEFAULT_OPT: SwiperProps = {
      slidesPerView: 3,
      spaceBetween: 10,
      observer:true,
      observeParents:true,
      virtual:false,
    };

    export default forwardRef<CarouselRefType, CarouselPropsType>(({
      children, 
      customClass = 'carousel',
      carouselOpt, 
      onCarousel, onChangeEvent
    }, ref) => {
      const swiperRef = useRef<SwiperRef | null>(null);
      const paginationRef = useRef<HTMLDivElement | null>(null);
      const prevBtnRef = useRef<HTMLButtonElement | null>(null);
      const nextBtnRef = useRef<HTMLButtonElement | null>(null);
      const [isPlaying, setIsPlaying] = useState(true); 
      const option = useMemo(() => ({ ...DEFAULT_OPT, ...carouselOpt }), [carouselOpt]);

      const handleAutoPlay = useCallback(() => {
        ...
      }, [isPlaying]);

      const handleChange = (e:SwiperClass) => {
        ...
      }

      const handleInit = (swiper:SwiperClass) => {
        ...
      }
      
      const handleOnSwiper = (e:SwiperClass) => {
        ...
      }

      useImperativeHandle(ref, () => ({
        getCarouselElement: () => swiperRef.current,
        carouselSlideTo: (idx) =>{
          swiperRef.current?.swiper.slideTo(idx)
        },
        carouselUpdate:()=>{
          swiperRef.current?.swiper.update();
        }
      }));

      return(
        <StyleWrap 
          className={cn('carousel-wrap', option.direction ==='vertical'&& 'vertical')}
        >
          <div className="carousel-inner">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, A11y, Autoplay, Virtual, Scrollbar, Mousewheel]}
              virtual={option.virtual ? { slides: React.Children.toArray(children) } : undefined}
              onSwiper={handleOnSwiper}
              onBeforeInit={handleInit}
              onSlideChange={handleChange}
              {...option}
              pagination={false} // pagination 예외 onBeforeInit 재할당
              navigation={false} // navigation 예외 onBeforeInit 재할당
              className={customClass}
            >
              {React.Children.toArray(children).map((childEl, index) => (
                <SwiperSlide key={index} className="carousel-item">
                  {childEl}
                </SwiperSlide>
              ))}
            </Swiper>
            {(option.navigation || option.autoplay) && (
              <div className="carousel-btns">
                {option.navigation && (
                  <>
                    <button 
                      ref={prevBtnRef}
                      type="button"
                      className="btn-prev">
                      <span className="icon"><SvgArrow $fill={colors.mSlateBlue}/></span>
                      <span className="blind">이전</span>
                    </button>
                    <button 
                      ref={nextBtnRef}
                      type="button"
                      className="btn-next">
                      <span className="icon"><SvgArrow $fill={colors.mSlateBlue}/></span>
                      <span className="blind">다음</span>
                    </button>
                  </>
                )}
                {option.autoplay && (
                  <div className="autoplay-btn">
                    <button
                      type="button"
                      className={\`btn \${isPlaying?'stop':'play'}\`}
                      onClick={handleAutoPlay}>
                        <span>{isPlaying? '정지' : '재생'}</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {option.pagination && (
            <div ref={paginationRef} className="carousel-pagination">
            </div>
          )}
        </StyleWrap>
      );
    });
    `
    },
    {
      id:'code-css',
      title:'CSS',
      lang:'css',
      code:
    `
    overflow:hidden;
    position:relative;
    .carousel-inner{
      position:relative;
    }
    &.vertical {
      height:100%;
      .swiper{ 
        height:100%;
      }
    }
    .carousel-pagination {
      display:flex;
      justify-content:center;
      gap:5px;
      position:relative;
      width:100%;
      margin-top:15px;
      &.swiper-pagination-progressbar{
        .swiper-pagination-progressbar-fill{
          background:\${colors.mSlateBlue};
        }
      }
      .swiper-pagination-bullet {
        margin:0;
        background:\${colors.gray};
        opacity:0.7;
      }
      .swiper-pagination-bullet-active {
        background: \${colors.mSlateBlue};
        opacity:1;
      }
    }
    
    .carousel-btns{
      position:absolute;
      top:50%;
      left:0;
      width:100%;
      & > button {
        display:block;
        position:absolute;
        z-index:1;
        top:50%;
        width:30px;
        height:30px;
        transform: translateY(-50%);
      }
      .btn-prev {
        left:0;
        svg{
          transition: stroke var(--transition)
        }
      }
      .btn-next{
        right:0;
        .icon{
          transform:scaleX(-1);
        }
      }
      .swiper-button-lock {
        display:none;
      }
      .swiper-button-disabled{
        svg {
          stroke: \${colors.gray};
        }
      }
      .icon{
        display:block;
      }
    }
    `
    }
  ]
}

export const toastData : ComponentsInfoType = {
  info:{
    id:'toast-info',
    title:'toast 컴포넌트',
    desc:'화면 EX) 하단에 잠시 노출 후 사라지는 형태, 메시지를 전달하는 데 사용.'
  },
  hook:[
  ],
  link:[
    {
      id:'toast-github',
      title:'github',
      link:'-'
    },
  ],
  code:[
    {
      id:'code-use',
      title:'사용',
      lang:'typescript',
      code:``
    },
  ]
}