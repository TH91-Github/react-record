import { bgShadow, colors, textColor, transitionStyle } from "assets/style/variables"
import Carousel from "components/common/Carousel"
import styled from "styled-components"
import { HubCategoryType, HubItemType } from "types/hub/hub"
import { CategoryHubItem } from "./CategoryHubItem"

interface HubCategoryListsType {
  data:HubCategoryType
}

// 캐러셀 기본 옵션
const carouselOpt = {
  centeredSlides: true, 
  loop:true,
  spaceBetween:0,
  effect:'creative',
  creativeEffect:{
    prev: {
      translate: [0, 0, 60],
      scale: 1.05,
      opacity: 0,
      origin: 'center',
    },
  }
}
export const HubCategoryLists = ({data}:HubCategoryListsType) =>{
  const getRepeatedArray = <T,>(arr: T[], minLength: number): T[] => {
    if (arr.length === 0) return [];
    const repeatCount = Math.ceil(minLength / arr.length);
    const result = Array.from({ length: repeatCount })
      .flatMap(() => arr)
      .slice(0, minLength);
      console.log(result)
    return result
  };

  return(
    <StyleWrap>
      <div className="category-lists">
        {data.hubLists.length === 0 
          ?
            <div className="empty">
              <p>{data.hubTit} 정보가 없어요. 🥹</p>
            </div>
          : 
            data.hubLists.length < 2 
              ? ( // 1개만 있는 경우
                <CategoryHubItem data={data.hubLists[0]} />
              ) : ( // 
                <Carousel carouselOpt={carouselOpt}>
                  {getRepeatedArray(data.hubLists, 6).map((hubItem, humIdx) => (
                    <CategoryHubItem data={hubItem} key={humIdx} />
                  ))}
                </Carousel>
              )
        }
      </div>
      <div className="category-info">
        <p>{data.hubTit}</p>
        <p>{data.hubLists.length}</p>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  position:relative;
  width:100%;
  min-height:180px;
  .category-lists{
    width:100%;
    height:180px;
  }
  .carousel-wrap{
    position:absolute;
    top:50%;
    left:50%;
    width:calc(100% + 40px);
    height:calc(100% + 40px);
    transform:translate(-50%,-50%);
  }
  .carousel-inner{
    width:100%;
    height:100%;
  }
  .swiper {
    overflow:visible;
    padding:20px 20px 20px;
    width:100%;
    height:100%;
  }
  .swiper-wrapper{
    overflow:visible;
  }
  .swiper-slide{
    &-prev {
      pointer-events:none;
    }
    &-next {
      .category-hub{
        transform: translateY(-15px) scale(0.9);
        opacity: 0.8;
      }
      & + .swiper-slide.carousel-item {
        &:not(&-prev):not(&-active):not(&-next){
          .category-hub{
            transform: translateY(-30px) scale(0.8) !important;
            opacity: 0.7 !important;
          }
        }
      }
    }
    &:not(&-prev):not(&-active):not(&-next) {
      pointer-events:none;
      .category-hub{
        transform: translateY(-50px) scale(0.7);
        opacity: 0;
      }
    }
  }
  .empty{
    display:flex;
    align-items:center;
    position:relative;
    width:300px;
    height:180px;
    padding:20px;
    border-radius:5px;
    border:1px solid #fff;
    background-color:#fff;
    box-shadow:${bgShadow.base};
    background:#fff;
  }
  .category-info{
    display:flex;
    gap:5px;
    align-items:center;
    padding:0 5px;
    margin-top:10px;
    font-size:14px;
  }
`;