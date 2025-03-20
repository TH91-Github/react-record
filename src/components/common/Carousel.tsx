import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass, SwiperProps, SwiperRef } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

interface CarouselPropsType {
  children: React.ReactNode,
  swiperClassName?: string,
  swiperOptions?: SwiperProps,
  onSwiperFunc?: () => void,
  onChangeFunc?: () => void,
}
interface CarouselRefType {
  getCarouselElement: () => SwiperRef | null,
  carouselSlideTo: (e:number) => void,
  carouselUpdate: () => void,
}

const CAROUSEL_DEFAULT_OPTIONS: SwiperProps = {
  spaceBetween: 10,
  slidesPerView: 3,
};

export default forwardRef<CarouselRefType, CarouselPropsType>(({
  children, 
  swiperClassName = 'carousel-wrap',
  swiperOptions = CAROUSEL_DEFAULT_OPTIONS, 
  onSwiperFunc, onChangeFunc
}: CarouselPropsType, ref) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  
  useImperativeHandle(ref, () => ({
    getCarouselElement: () => swiperRef.current,
    carouselSlideTo: (idx) =>{ // 원하는 index 이동
      swiperRef.current?.swiper.slideTo(idx)
    },
    carouselUpdate:()=>{
      swiperRef.current?.swiper.update();
    }
  }));

  return(
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, A11y, Autoplay, Virtual]}
      {...swiperOptions}
      className={swiperClassName}
    >
      {
        React.Children.toArray(children).map((childEl, index) => (
          <SwiperSlide key={index} className="carousel-item">
            {childEl}
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
});