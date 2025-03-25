import { SvgSearch } from "assets/svg/Common";
import InputText from "components/common/InputText";
import styled from "styled-components"

interface SearchPropsType {
  icon?: {
    isOn?: boolean,
    size?: number,
  },
  placeholder?:string,
}
export const Search = ({
  icon = {},
  placeholder = '',
}:SearchPropsType) => {
  const { isOn = true, size = 24 } = icon; // 기본 값
  
  return (
    <StyleWrap 
      className="search"
      $iconSize={size}
    >
      {isOn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        id="search"
        placeholder={placeholder}
      />
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
    ${({$iconSize}) => `
      width:${$iconSize}px;
      height:${$iconSize}px;
    `}
  }
  .input-item {
    flex:1;
    height:30px;
  }
`;