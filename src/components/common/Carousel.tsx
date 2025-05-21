import React, { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass, SwiperProps, SwiperRef } from 'swiper/react';
import { A11y, Autoplay, Mousewheel, Navigation, Pagination, Scrollbar, Virtual } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/virtual';
import styled from 'styled-components';

interface CarouselPropsType {
  children: React.ReactNode,
  customClass?: string,
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
}: CarouselPropsType, ref) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); 
  const option = useMemo(() => ({ ...DEFAULT_OPT, ...carouselOpt }), [carouselOpt]);

  const handleAutoPlay = useCallback(() => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current?.swiper.autoplay.stop();
    } else {
      swiperRef.current?.swiper.autoplay.start();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  const handleChange = (e:SwiperClass) => {
    onChangeEvent && onChangeEvent();
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
    <StyleWrap className={`carousel-wrap ${option.direction ==='vertical' ? 'vertical': ''}`}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay, Virtual, Scrollbar, Mousewheel]}
        virtual={option.virtual ? { slides: React.Children.toArray(children) } : undefined}
        onSlideChange={handleChange}
        onSwiper={handleOnSwiper}
        {...option}
        className={customClass}
      >
        {React.Children.toArray(children).map((childEl, index) => (
          <SwiperSlide key={index} className="carousel-item">
            {childEl}
          </SwiperSlide>
        ))}
      </Swiper>
      {option.pagination && (
        <div ref={paginationRef} className="carousel-pagination">
        </div>
      )}
      {(option.navigation || option.autoplay) && (
        <div className="carousel-btns">
          {option.navigation && (
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
          )}
          {option.autoplay && (
            <div className="autoplay-btn">
              <button
                type="button"
                className={`btn ${isPlaying?'stop':'play'}`}
                onClick={handleAutoPlay}>
                  <span>{isPlaying? '정지' : '재생'}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </StyleWrap>
  );
});

const StyleWrap = styled.div`
  position:relative;
  &.vertical {
    height:100%;
    .swiper{ 
      height:100%;
    }
  }
`;