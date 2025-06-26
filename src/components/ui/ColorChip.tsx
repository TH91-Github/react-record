import { bgOpacity, bgShadow, colors, textShadow } from "assets/style/variables";
import { useToast } from "hooks/useToast";
import styled from "styled-components";
import { ColorChipListsType } from "types/ui";
import { copyClipboard } from "utils/common";

interface ColorChipPropsType {
  data: ColorChipListsType[];
  keyValue?: string;
}
export const ColorChip = ({data, keyValue}:ColorChipPropsType) => {
  const { addToast } = useToast();

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    addToast(
      copySuccess ? '복사를 성공했어요.' : '복사를 실패했어요.. 😢',
      copySuccess ? 'base' : 'error'
    )
  };

  return (
    <StyleWrap className="color-chip">
      <ul>
        { data.map((item,idx) => (
          <li key={idx} className={`${(item.id).includes('bgOpacity') ? 'color-opacity' : ''}`}>
            <ColorChipItem $bgColor={item.code} $isReadable={item?.readable}>
              <div className="color-bg">
                <button className="btn-hex" onClick={() => handleClickCopy(item.code)}>
                  <span className="tit">{item.code}</span>
                </button>
              </div>
              <div className="color-info">
                <button className="btn-token" onClick={() => handleClickCopy(`${keyValue || 'color'}.${item.title}`)}>
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
  .btn-hex{
    position:absolute;
    top:50%;
    left:50%;
    padding:5px;
    border-radius:5px;
    outline:0;
    transform: translate(-50%, -50%);
    transition: background var(--transition);
    .tit{
      font-size:14px;
      text-shadow:${textShadow.bgBlack};
      color:#fff;
      transition: color var(--transition), text-shadow var(--transition);
    }
    &:hover, &:focus{
      background:${bgOpacity.white};
      .tit {
        text-shadow:unset;
        color: ${props => props.$isReadable ? colors.black : props.$bgColor};
      }
    }
  }
  .color-info {
    .btn-token{
      display:block;
      position:relative;
      width:100%;
      padding:10px 10px;
      border: 2px solid #fff;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
      background:#fff;
      transition: border-color var(--transition);
      text-align:left;
      outline:0;
      &:focus {
        border-color: ${props => props.$isReadable ? colors.black : props.$bgColor};
      }
    }
    .tit{
      display:inline-block;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis; 
      line-height:1;
    }
  }
  &:hover{ 
    .btn-token {
      border-color: ${props => props.$isReadable ? colors.black : props.$bgColor};
    }
  }
  .tooltip, .desc-box{
    position:absolute;
    top:0;
  }
`;