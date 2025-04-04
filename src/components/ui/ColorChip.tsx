import { bgShadow, textShadow } from "assets/style/variables";
import { useCallback } from "react";
import styled from "styled-components";
import { ColorChipDataType } from "types/ui";

interface ColorChipPropsType {
  data: ColorChipDataType[];
}
export const ColorChip = ({data}:ColorChipPropsType) => {
  console.log(data)
  const colorImport = useCallback(()=>{

  },[])

  return (
    <StyleWrap className="color-chip">
      <ul>
        { data.map((item,idx) => (
          <li key={idx} className={`${(item.id).includes('bgOpacity') ? 'color-opacity' : ''}`}>
            <ColorChipItem $bgColor={item.code}>
              <div className="color-bg">
                <span className="color-code">{item.code}</span>
              </div>
              <div className="color-info">
                <span className="tit">{item.title}</span>
              </div>
            </ColorChipItem>
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  & > ul {
    display: flex;
    flex-wrap:wrap;
    gap:20px;
  }
`;

type ColorChipItemType = {
  $bgColor:string;
}
const ColorChipItem = styled.div<ColorChipItemType>`
  overflow:hidden;
  position:relative;
  width:150px;
  border-radius:5px;
  box-shadow:${bgShadow.base};
  .color-bg{
    position:relative;
    height:70px;
    background:${({$bgColor}) => $bgColor};
  }
  .color-code{
    position:absolute;
    top:50%;
    left:50%;
    font-size:14px;
    text-shadow:${textShadow.bgBlack};
    color:#fff;
    transform: translate(-50%, -50%);
  }
  .color-info {
    padding:10px 10px;
    .tit {
      display:block;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis; 
    }
  }
`;