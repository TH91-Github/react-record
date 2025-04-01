import { colors } from "assets/style/Variable";
import Carousel from "components/common/Carousel";
import { useFixedData } from "hooks/useDataProcessing";
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
    <StyleWrap className="header-wrap">
      <div className="header-inner">
        <div className="heading">
          <h2 className="name-tag">Naming Conventions</h2>
          <h3 className="title">
            <span>좋은 이름이 뭐길래?</span>
            <span>네이밍 고민...</span>
            <span><span className="color">명명(命名)</span> 규칙으로 해결하기!</span>
          </h3>
          <p className="desc">
            <span>"네이밍 때문에 고민하는 시간 줄이고 </span>
            <span>명확한 네이밍 규칙으로 가독성과 유지보수를 쉽게!</span>
            <span>효율적인 협업을 위해, <span className="color">명명(命名)</span> 규칙 가이드를 공유하고자 만든</span>
            <span>네이밍 규칙 확립 가이드입니다."</span>
          </p>
        </div>
        <div className="category-lists">
          {namingCategory ? (
            <Carousel carouselOpt={{direction:'vertical', slidesPerView:'auto', spaceBetween:15, mousewheel:true}} >
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
  .header-inner{
    display:flex;
    position:relative;
    height:400px;
  }
  .heading{
    width:55%;
  }
  .category-lists{
    position:relative;
    width:45%;
    height:100%;
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
`;
