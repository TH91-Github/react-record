import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass, SwiperProps, SwiperRef } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import styled from 'styled-components';

interface CarouselPropsType {
  children: React.ReactNode,
  carouselClassName?: string,
  carouselOpt?: SwiperProps,
  onCarousel?: () => void,
  onChangeEvent?: () => void,
}
interface CarouselRefType {
  getCarouselElement: () => SwiperRef | null,
  carouselSlideTo: (e:number) => void,
  carouselUpdate: () => void,
}

const DEFAULT_OPT: SwiperProps = {
  spaceBetween: 10,
  slidesPerView: 3,
  observer:true,
  observeParents:true,
  virtual:false,
};

export default forwardRef<CarouselRefType, CarouselPropsType>(({
  children, 
  carouselClassName = 'carousel-wrap',
  carouselOpt=DEFAULT_OPT, 
  onCarousel, onChangeEvent
}: CarouselPropsType, ref) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  const { 
  slidesPerView, spaceBetween, pagination, navigation, speed, autoplay,  virtual, 
  } = carouselOpt; 

  const handleAutoPlay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current?.swiper.autoplay.stop();
    } else {
      swiperRef.current?.swiper.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  }
  const handleOnSwiper = (e:SwiperClass) => {
    onCarousel && onCarousel();
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
    <StyleWrap>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay, Virtual]}
        virtual={virtual ? { slides: React.Children.toArray(children) } : undefined}
        onSwiper={handleOnSwiper}
        {...carouselOpt}
        className={carouselClassName}
      >
        {
          React.Children.toArray(children).map((childEl, index) => (
            <SwiperSlide key={index} className="carousel-item">
              {childEl}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {
        pagination && (
          <div ref={paginationRef} className="carousel-pagination">
          </div>
        )
      }
      {
        (navigation || autoplay) && (
          <div className="carousel-btns">
            {
              navigation && (
                <>
                  <button 
                    ref={prevBtnRef}
                    type="button"
                    className="btn-prev">
                    <span className="icon">{'<'}</span>
                    <span className="blind">이전</span>
                  </button>
                  <button 
                    ref={nextBtnRef}
                    type="button"
                    className="btn-next">
                    <span className="icon">{'>'}</span>
                    <span className="blind">다음</span>
                  </button>
                </>
              )
            }
            {
              autoplay && (
                <div className="autoplay-btn">
                  <button
                    type="button"
                    className={`btn ${isPlaying?'stop':'play'}`}
                    onClick={handleAutoPlay}>
                      <span>{isPlaying? '정지' : '재생'}</span>
                  </button>
                </div>
              )  
            }
          </div>
        )
      }
    </StyleWrap>
  );
});

const StyleWrap = styled.div`
  position:relative;
`;