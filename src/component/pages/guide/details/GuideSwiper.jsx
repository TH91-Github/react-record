import SwiperSlider from "component/common/SwiperSlider";
import TitleBar from "component/common/TitleBar";
import SubTitleBar from "component/common/SubTitleBar";
import { colors } from "component/styled/common/Variable";
import * as SC from "component/styled/common/AllStyled";
import * as S from "component/pages/guide/styled/GuideStyled";
function GuideSwiper () {
  const swiperOpt = {
    pagination: {
      clickable: true,
    },
    navigation: true
  }
  return (
    <S.GuidDetailWrap>
      <SC.BoxWrap className="search">
        <SC.BoxInner $padding="30px 30px 0">
          <TitleBar>Swiper Slider</TitleBar>
          <SC.ListBarUl $marginTop="20px"> 
            <SC.LiBar>
              <SC.TextP><SC.ColorTag $color={colors.rede76647}>import 경로 : </SC.ColorTag> "src/component/common/SwiperSlider";</SC.TextP>
            </SC.LiBar>
            <SC.LiBar>
              <SC.TextP><SC.ColorTag $color={colors.rede76647}>참고 : </SC.ColorTag> https://swiperjs.com/</SC.TextP>
            </SC.LiBar>
          </SC.ListBarUl>
        </SC.BoxInner>
        <SC.BoxLine $top $borderWidth="5px" $borderColor={colors.baseBlack} $marginTop="30px" $paddingTop="30px" className="">
          <SC.BoxInner $margin="0 auto" $padding="0 30px">
            <SC.Div>
              <SubTitleBar fontSize="16px">기본 default</SubTitleBar>
            </SC.Div>
            <SC.Div $marginTop="20px">
              <SwiperSlider swiperOpt={swiperOpt}></SwiperSlider>
            </SC.Div>
          </SC.BoxInner>
        </SC.BoxLine>
        <SC.BoxLine $top $borderWidth="2px"  $marginTop="30px" $paddingTop="30px" className="">
          <SC.BoxInner $margin="0 auto" $padding="0 30px">
            <SubTitleBar fontSize="16px">설명 참고</SubTitleBar>
            <SwiperSlider></SwiperSlider>
          </SC.BoxInner>
        </SC.BoxLine>
      </SC.BoxWrap>
      
    </S.GuidDetailWrap>
  )
}
export default GuideSwiper;