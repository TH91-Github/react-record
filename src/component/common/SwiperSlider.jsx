import { colors } from 'component/styled/common/Variable';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSlider({swiperData, swiperOpt}) {
  console.log(swiperOpt)
  function onSwiper(swiperE){
    console.log("init Swiper")
  }
  function onSlideChange(changeE) {
    console.log(changeE)
  }
  return (
    // 샘플
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        {...swiperOpt}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}>
          {
            swiperData > 0
            ?
              <>
                <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1<br />Slide 1Slide 1Slide 1</SwiperSlide>
              </>
            : 
              <>
                <SwiperSlide><BaseSlide>Slide 1 Slide 1Slide 1Slide 1</BaseSlide></SwiperSlide>
                <SwiperSlide><BaseSlide>Slide 1 Slide 1Slide 1Slide 1</BaseSlide></SwiperSlide>
                <SwiperSlide><BaseSlide>Slide 1 Slide 1Slide 1Slide 1</BaseSlide></SwiperSlide>
              </>
          }
      </Swiper>

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

const BaseSlide = styled.div`
  width:100%;
  height:200px;
  background:${colors.subTextColor};
  color:${colors.baseWhite};
`

export default SwiperSlider;