import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSlider() {
  return (
    // 샘플
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
  )
}
export default SwiperSlider;