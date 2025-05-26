import styled from "styled-components";
import { sanitizeHtml } from "utils/common";

interface InnerHTMLPropsType { 
  tag:string;
  data:string;
  customClass?:string;
  $display?:string;
}
export const InnerHTML = ({
  tag = 'span',
  data,
  customClass = '',
  $display,
}:InnerHTMLPropsType) => {
  return (
    <StyleWrap
       as={tag}
       className={customClass}
       $display={$display || 'inline-block'}
       dangerouslySetInnerHTML={{__html:sanitizeHtml(data)}}
    />
  )
}

interface StyleWrapPropsType {
  $display: string,
}
const StyleWrap = styled.span<StyleWrapPropsType>`
  display:${({$display}) => $display};
`;