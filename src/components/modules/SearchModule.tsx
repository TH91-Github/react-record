
import { SvgSearch } from "assets/svg/Common";
import InputText from "components/common/InputText";
import styled from "styled-components"

interface SearchPropsType {
  isBtn?: boolean; // 버튼 유무 버튼 false 시  icon on
  placeholder?:string;
  $line?: 'line' | 'line-bottom' | 'line-left' | 'none';
}
export const SearchModule = ({
  isBtn = true,
  placeholder = '',
  $line = 'line',
}:SearchPropsType) => {
  
  return (
    <StyleWrap className={`search ${isBtn ? 'search-btn': ''}`}>
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
  .icon{
    flex-shrink: 0;
    display:inline-block;
    position:relative;
  }
  .input-item {
    flex-grow:1;
  }
  .search-btn {
    flex-shrink: 0;
  }
  .btn {
    width:40px;
    height:40px;
  }
  &.search-btn {
    .input {
      border-top-right-radius:0;
      border-bottom-right-radius:0;
    }
    .btn  {
      border-top-left-radius:0;
      border-bottom-left-radius:0;
    }
  }
`;