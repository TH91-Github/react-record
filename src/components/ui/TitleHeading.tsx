import styled from "styled-components"
import { TitlePoint } from "./TitlePoint";
import { TitlePointPropsType } from "types/ui";

interface TitleDescPropsType extends TitlePointPropsType{ 
  desc?: string | string[],
}

export const TitleHeading = ({
  titleTag,
  titleText,
  pointer,
  $fontSize,
  $activeColor,
  desc
}:TitleDescPropsType) => {
  return( 
    <div className="content-heading">
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
    </div>
  )
}

const StyleWrap = styled.div`

`;