import styled from "styled-components"
import { TextHighlight } from "./TextHighlight";
import { bgColor, colors } from "assets/style/variables";
import { KeywordBaseType } from "types/common";

// 검색 자동 완성 목록
interface PreviewTextPropsType {
  data: KeywordBaseType[];
  matcheVal:string;
  onKeyword: (keyVal:string) => void
}
export const PreviewText = ({data, matcheVal, onKeyword}: PreviewTextPropsType) => {

  const handleKeywordClick = (keyVal:string) => {
    onKeyword && onKeyword(keyVal); // id와 자동완성 text
  }
  return (
    <StyleWrap className="preview-text">
      <ul>
        {data.map((item, index) => (
          <li className="preview-item" key={index}>
            <button 
              type="button" 
              className=" ellipsis"
              onClick={() => handleKeywordClick(item.keyword)}
            >
              <TextHighlight 
                text={item.keyword} 
                keyword={matcheVal} 
              />
            </button>
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  overflow: hidden;
  position:absolute;
  z-index:5;
  top:calc(100% + 5px);
  left:0;
  width:100%;
  border-radius:5px;
  background-color: #fff;
  border: 1px solid ${colors.lineColor};
  max-height: 300px;
  .preview-item {
    button {
      padding: 10px;
      font-size:14px;
      transition: background-color var(--transition);
      text-align: left;
      &:hover, &:focus { 
        background:${bgColor.sideWite};
      }
    }
  }
`;