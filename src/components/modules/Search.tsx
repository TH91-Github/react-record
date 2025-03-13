import { SvgSearch } from "assets/svg/common";
import InputText from "components/common/InputText";
import styled from "styled-components"

interface SearchPropsType {
  icon?: {
    isOn: boolean, // 사용 여부 
    size: number, // 크기 (정사각형) 
  },
  placeholder?:string,
}
export const Search = ({
  icon = {isOn:true, size:25}, // 검색(돋보기) 아이콘 사용 여부
  placeholder = '',
}:SearchPropsType) => {
  return (
    <StyleWrap 
      className="search"
      $iconSize={icon.size}
    >
      { icon.isOn && <i className="icon"><SvgSearch /></i>}
      <InputText 
        id="search"
        placeholder={placeholder}
        disabled={true}
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
    display:inline-block;
    position:relative;
    ${({$iconSize}) => `
      width:${$iconSize}px;
      height:${$iconSize}px;
    `}
  }
  .input-item {
    width:calc(100% - ${({$iconSize}) => $iconSize}px - 10px);
    height:30px;
  }
`;