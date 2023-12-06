import { colors } from 'component/styled/common/Variable';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperWrap({swiperOpt, children, onInit, onChange, ...props}) {
  const baseSlide = new Array(3).fill('Slide');
  function onSwiper(swiperE){
    // console.log("init Swiper")
    onInit && onInit(swiperE);
  }
  function onSlideChange(changeE) {
    // console.log("swiper Change")
    onChange && onChange(changeE);
  }
  return (
    // 샘플
    <>
      <SwiperCp {...props}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          {...swiperOpt}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}>
            {
              children === undefined
              ? // default 기본 슬라이드 - 확인용
                <>
                  {
                    baseSlide.map((slide, idx) => 
                    <SwiperSlide key={idx}><BaseSlide><span>{slide +'-'+ (idx+1) }</span></BaseSlide></SwiperSlide>
                    )
                  }
                </>
              : 
              children
            }
        </Swiper>
      </SwiperCp>
      { // 참고용
        false &&
        <Swiper pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
          <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
          <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
        </Swiper>

      }
    </>
  )
}

export default SwiperWrap;

const SwiperCp = styled.div`
  
  ${props => props.$thema === 'dark'
    ?`
    .swiper-button-prev, .swiper-button-next {
      color:${colors.baseWhite};
    }
    .swiper-button-prev.swiper-button-disabled {
      color:${colors.bgWhite};
    }
    .swiper-pagination-bullet{
      background:${colors.bgWhite};
    }
    .swiper-pagination-bullet-active{
      background:${colors.baseWhite};
    }`
    : 
    `
    .swiper-button-prev, .swiper-button-next {
      color:${colors.green};
    }
    .swiper-button-prev.swiper-button-disabled {
      color:${colors.subTextColor};
    }
    .swiper-pagination-bullet{
      background:${colors.bgWhite};
    }
    .swiper-pagination-bullet-active{
      background:${colors.green};
    }
    `
  }
`;

const BaseSlide = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:200px;
  background:${colors.bgGreen};
  color:${colors.baseWhite};
`