import { breakpoints, colors, shadow } from "assets/style/Variable";
import styled from "styled-components"

export const NamingHeader = () =>{

  return(
    <StyleWrap>
      <div className="header-inner">
        <div className="header-content">
          <h2 className="path">Naming Conventions</h2>
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
          
        </div>
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  ${shadow.test};
  .header-inner{
    overflow:hidden;
    display:flex;
    position:relative;
    padding:30px;
    max-width:${breakpoints.tab}px;
    margin:0 auto;
  }
  .header-content{
    width:55%;
  }
  .path{
    display:inline-block;
    border-radius:5px;
    padding:4px 8px;
    background:${colors.mSlateBlue};
    font-size:12px;
    font-weight:400;
    color:#fff;
  }
  .title {
    margin-top:30px;
    & > span {
      display:block;
      font-size:32px;
      line-height:1.3;
    }
  }
  .desc {
    margin-top:20px;
    & > span{
      display:block;
      line-height:1.5;
    }
  }
  .category-lists{
    width:45%;
  }
`;
