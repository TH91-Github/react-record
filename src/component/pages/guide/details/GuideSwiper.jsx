import SwiperSlider from "component/common/SwiperSlider";
import * as S from "component/styled/common/AllStyled";
import { colors } from "component/styled/common/Variable";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";


function GuideSwiper () {
  const swiperOpt = {
    pagination: {
      clickable: true,
    },
    navigation: true
  }
  return (
    <div>
      <S.BoxWrap className="search">
        <S.BoxInner $padding="30px 30px 0">
          <TitleBar>Swiper Slider</TitleBar>
          <S.listBarUl $marginTop="20px"> 
            <S.liBar>
              <S.TextP><S.colorTag $color={colors.rede76647}>import 경로 : </S.colorTag> "src/component/common/SwiperSlider";</S.TextP>
            </S.liBar>
            <S.liBar>
              <S.TextP><S.colorTag $color={colors.rede76647}>참고 : </S.colorTag> https://swiperjs.com/</S.TextP>
            </S.liBar>
          </S.listBarUl>
        </S.BoxInner>
        <S.BoxLine $top $borderWidth="5px" $borderColor={colors.baseBlack} $marginTop="30px" $paddingTop="30px" className="">
          <S.BoxInner $margin="0 auto" $padding="0 30px">
            <S.Div>
              <SubTitleBar fontSize="16px">기본 default</SubTitleBar>
            </S.Div>
            <S.Div $marginTop="20px">
              <SwiperSlider swiperOpt={swiperOpt}></SwiperSlider>
            </S.Div>
          </S.BoxInner>
        </S.BoxLine>
        <S.BoxLine $top $borderWidth="2px"  $marginTop="30px" $paddingTop="30px" className="">
          <S.BoxInner $margin="0 auto" $padding="0 30px">
            <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
            <SwiperSlider></SwiperSlider>
          </S.BoxInner>
        </S.BoxLine>
      </S.BoxWrap>
      
    </div>
  )
}
export default GuideSwiper;