
import { SvgSearch } from "assets/svg/Common";
import InputText from "components/common/InputText";
import styled from "styled-components"

interface SearchPropsType {
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
}
export const Search = ({
  isBtn = true,
  placeholder = '',
  $line = 'line',
}:SearchPropsType) => {
  
  return (
    <StyleWrap className="search">
      {!isBtn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        id="search"
        placeholder={placeholder}
        styleOpt={ { $defaultLine:$line} }
      />
      {isBtn && (
        <button className="btn btn-primary">
          <i className="icon"><SvgSearch /></i>
        </button>
      )}
    </StyleWrap>
  )
}
interface StyleWrapType {
  $iconSize? : number,
}

const StyleWrap = styled.div<StyleWrapType>`
  display: flex;
  align-items: center;
  gap:10px;
  .icon{
    flex-shrink: 0;
    display:inline-block;
    position:relative;
    width:30px;
    height:30px;
  }
  .input-item {
    flex:1;
  }
  .btn {
    .icon {
      position: absbolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
      & > svg {
        stroke:#fff;
      }
    }
  }
`;