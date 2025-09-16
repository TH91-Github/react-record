import { bgShadow, colors, scrollBar, transitionStyle } from "assets/style/variables";
import { IconPlus } from "assets/svg/icons";
import styled from "styled-components";
import { HubCategoryLists } from "./HubCategoryLists";
import { hubBaseData } from "./data/hubData";

// 🔹 방만들기 + 리스트  
export const HubBoxCategory = () => {
  return (
    <StyleWrap>
      <div className="cearte-box">
        <button
          type="button"
          className="btn-cearte"
        >
          <span className="icon"><IconPlus /></span>
        </button>
      </div>
      <div className="box-wrap">
        <ul>
          {hubBaseData.map((item,idx) => (
            <li 
              className="box-item"
              key={idx}
            >
              <HubCategoryLists data={item} />
            </li> 
          ))}
        </ul>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  display:flex;
  gap:15px;
  position:relative;
  width:100%;
  &::before{
    position:absolute;
    z-index:-1;
    top:0;
    left:0;
    width:100%;
    height:50%;
    background:${colors.blue};
    content:'';
  }
  .cearte-box{
    padding:30px 0 20px 30px;
  }
  .btn-cearte{
    flex-shrink:0;
    display:flex;
    justify-content:center;
    align-items:center;
    width:200px;
    height:180px;
    border-radius:5px;
    border:1px solid #fff;
    background-color:#fff;
    box-shadow:${bgShadow.base};
    ${transitionStyle(["border-color"])};
    .icon{
      display:block;
      width:40px;
      height:40px;
    }
    &:hover{
      border-color:${colors.blue};
      color:${colors.blue};
    }
  }
  .box-wrap{
    overflow:hidden;
    overflow-x:auto;
    ${scrollBar('x')}
    position:relative;
    width: calc(100% - 200px);
    padding:30px 0 20px 15px;
    & > ul { 
      display:flex;
      gap:30px;
      width: max-content;
    }
  }
  .box-item{
    position:relative;
    width:300px;
  }
`;