import styled from "styled-components"
import { TextHighlight } from "./TextHighlight";

export interface PreviewDataType {
  id: string;
  title:string;
  keyword: string;
}

interface PreviewTextPropsType {
  data: PreviewDataType[];
  matcheVal:string;
}

export const PreviewText = ({data, matcheVal}: PreviewTextPropsType) => {
  console.log(data)
  return (
    <StyleWrap className="preview-text">
      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={() => console.log('ddd')}>
            <TextHighlight text={item.keyword} keyword={matcheVal} />
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  margin-top: 8px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 4px 0;
    font-size: 14px;
  }
`;