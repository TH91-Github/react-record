import styled from "styled-components"
import { TitlePoint } from "./TitlePoint";
import { TitlePointPropsType } from "types/ui";

interface TitleDescPropsType extends TitlePointPropsType{ 
  desc?: string | string[];
  customClass?: string;
}

export const TitleHeading = ({
  titleTag,
  titleText,
  pointer,
  $fontSize,
  $activeColor,
  desc,
  customClass
}:TitleDescPropsType) => {
  return( 
    <StyleWrap className={`${customClass ?? 'title'}-heading`}>
      <TitlePoint 
        $display="block"
        titleTag={titleTag}
        titleText={titleText}
        pointer={pointer}
        $activeColor={$activeColor}
        $fontSize={$fontSize}
      />
      {desc && (Array.isArray(desc) ? (
        <ul className="bullet-lists">
          {desc.map((item, index) => (
            <li key={index} className="desc circle">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="desc">{desc}</p>
      ))}
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  p, .bullet-lists{
    margin-top:20px;
  }
`;