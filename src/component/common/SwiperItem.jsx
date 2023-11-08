import { colors } from 'component/styled/common/Variable';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperItem ({slide, children}) {
  console.log(children)
  return (
    <>
      {
        children === undefined
        ?
          <SwiperSlide>
              <SlideBase>
                <p>슬라이드 기본 {slide}</p>
              </SlideBase>
          </SwiperSlide>
        :
          <SwiperSlide>
            {children}
          </SwiperSlide>
      }
    </>
  )
}

// styled
const SlideBase = styled.div`
  height:200px;
  background:${colors.bgGreen};
  color:${colors.baseWhite};
`;

export default SwiperItem;