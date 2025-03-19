import React from 'react';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';

interface SwiperTestPropsType {
  children: React.ReactNode;
  swiperClassName?: string;
  swiperOptions?: SwiperProps;
}
const CAROUSEL_DEFAULT_OPTIONS: SwiperProps = {
  spaceBetween: 10,
  slidesPerView: 3,
};

export const SwiperTest = ({
  children, 
  swiperClassName = 'carousel-wrap',
  swiperOptions = CAROUSEL_DEFAULT_OPTIONS, 
}:SwiperTestPropsType) => {
  return(
    <Swiper
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
};
