import { bgOpacity, bgShadow, colors, textShadow } from "assets/style/variables";
import styled from "styled-components";
import { ColorChipDataType } from "types/ui";
import { copyClipboard } from "utils/common";

interface ColorChipPropsType {
  data: ColorChipDataType[];
}
export const ColorChip = ({data}:ColorChipPropsType) => {

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    // 👇 popup 컴포넌트 완료 후 교체
    copySuccess 
      ? console.log('성공') 
      : console.log('실패') 
  };

  return (
    <StyleWrap className="color-chip">
      <ul>
        { data.map((item,idx) => (
          <li key={idx} className={`${(item.id).includes('bgOpacity') ? 'color-opacity' : ''}`}>
            <ColorChipItem $bgColor={item.code} $isReadable={item?.readable}>
              <div className="color-bg">
                <button className="color-hex" onClick={() => handleClickCopy(item.code)}>
                  <span className="tit">{item.code}</span>
                </button>
              </div>
              <div className="color-info">
                <button className="color-token" onClick={() => handleClickCopy(`colors.${item.title}`)}>
                  <span className="tit">{item.title}</span>
                </button>
              </div>
              {(item.desc && false) && ( // 설명 툴팁 진행 예정.
                <>
                  <button className="tooltip"></button>
                  <div className="desc-box">

                  </div>
                </>
              )}
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
  $isReadable?:boolean;
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
  .color-hex{
    position:absolute;
    top:50%;
    left:50%;
    padding:5px;
    border-radius:5px;
    outline:0;
    transform: translate(-50%, -50%);
    .tit{
      font-size:14px;
      text-shadow:${textShadow.bgBlack};
      color:#fff;
    }
    &:focus{
      background:${bgOpacity.white};
      .tit {
        text-shadow:unset;
        color: ${props => props.$isReadable ? colors.black : props.$bgColor};
      }
    }
  }
  .color-info {
    padding:10px 10px;
    border: 2px solid #fff;
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background:#fff;
    transition: border-color var(--transition);
    .color-token{
      display:inline-block;
      position:relative;
      max-width:100%;
      outline:0;
      &::before, &::after{
        position:absolute;
        bottom:-1px;
        left:1px;
        width:100%;
        height:2px;
        background:${colors.lineColor};
        content:'';
        transform: scaleX(0);
        transition: transform var(--transition);
        transform-origin:center left;
      }
      &::after{
        z-index:1;
        left:0;
        bottom:0;
        background: ${props => props.$isReadable ? colors.black : props.$bgColor};
      }
      &:focus {
        &::before, &::after{ 
          transform: scaleX(1);
        }
      }
      
    }
    .tit{
      display:block;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis; 
      line-height:1;
    }
  }
  &:hover{ 
    .color-info {
      border-color: ${props => props.$isReadable ? colors.black : props.$bgColor};
    }
  }

  .tooltip, .desc-box{
    position:absolute;
    top:0;
  }
`;