import { colors, ellipsisStyle, media } from "assets/style/variables";
import Carousel from "components/common/Carousel";
import { useFixedData } from "hooks/useFixedData";
import styled from "styled-components";
import { namingData } from "../../data/namingData";

interface NamingHeaderPropsType {
  selectNaming: string | null;
  updateNaming: (e:string | null) => void;
}
export const NamingHeader = ({selectNaming, updateNaming}:NamingHeaderPropsType) =>{
  const namingCategory = useFixedData(() =>
    namingData.map(item => ({
      id: item.id,
      title: item.title
    }))
  );
  const handleClick = (id:string) => {
    updateNaming(selectNaming === id ? null : id);
  }
  return(
    <StyleWrap className="principles-header">
      <div className="principles-inner">
        <div className="heading">
          <h2 className="name-tag">Naming Conventions</h2>
          <h3 className="title">
            <span>네이밍 규칙 & 작성 가이드</span>
            <span>코드의 명확성과 일관성을 위해</span>
            <span><span className="color">규칙</span> 가이드로 통일하기</span>
          </h3>
          <p className="desc">
            <span>"네이밍 때문에 고민하는 시간 줄이고 </span>
            <span>명확한 네이밍 규칙으로 가독성과 유지보수를 쉽게!</span>
            <span>효율적인 협업을 위해, 규칙 가이드를 공유하고자 만든</span>
            <span>네이밍 규칙 확립 가이드입니다."</span>
          </p>
        </div>
        <div className="category-lists">
          {namingCategory ? (
            <Carousel 
              carouselOpt={{
              direction: 'vertical',
              slidesPerView: 'auto',
              spaceBetween: 15,
              mousewheel: true,
              breakpoints: {
                0: {
                  direction: 'horizontal',
                  slidesPerView: 'auto',
                  spaceBetween: 10,
                  mousewheel: false,
                },
                768: {
                  direction: 'vertical',
                  slidesPerView: 'auto',
                  spaceBetween: 15,
                  mousewheel: true,
                },
              },
            }}
            >
              { namingCategory.map((namingItem,idx) => (
                <div 
                  className={`category-item ${selectNaming === namingItem.id? 'selected': ''} `}
                  key={idx}>
                  <button 
                    type="button" 
                    className="category-btn"
                    onClick={() => handleClick(namingItem.id)}>
                      <span>{namingItem.title}</span>
                    </button>
                </div>
              ))}
            </Carousel >
          ) : (
            <div className="error-item">
              불러오지 못하였습니다.
            </div>
          )}
        </div>
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
.principles-inner{
  display:flex;
  position:relative;
  width:100%:
}
.heading{
  width:55%;
}
.category-lists{
  position:absolute;
  top: 0;
  right:0;
  width:45%;
  height:100%;
  padding:30px;
}
.carousel-item{
  height:auto;
}
.category-item{
  &.selected {
    .category-btn{
      border-color:${colors.mSlateBlue};
      background:${colors.mSlateBlue};
      color:#fff;
    }
  }
}
.category-btn{
  width:100%;
  padding:10px 20px;
  border-radius:10px;
  border:1px solid ${colors.lineColor};
  text-align:left;
  transition: border-color var(--transition), background var(--transition), color var(--transition);
  &:hover, &:focus {
    color:${colors.mSlateBlue};
    border-color:${colors.mSlateBlue};
  }
}
.error-item{
  padding:30px;
  text-align:center;
}

${media.mo} {
  .principles-inner{
    display:block;
  }
  .heading{
    width:100%;
  }
  .category-lists{
    position:relative;
    width:100%;
    margin-top:20px;
    padding:0;
  }
  .swiper-slide{
    width:auto;
  }
  .category-btn{
    display:inline-block;
    width:auto;
    padding:8px 10px;
    & > span {
      ${ellipsisStyle(1,14)};
    }
  }
}
`;
