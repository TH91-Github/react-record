import styled from "styled-components";
import { TitlePointPropsType } from "types/ui";
import { InnerHTML } from "./InnerHTML";
import { TitlePoint } from "./TitlePoint";
import { media } from "assets/style/variables";

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
    <StyleWrap className={`${customClass ?? 'title-heading'}`}>
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
            <li key={index} className="desc circle" >
              <InnerHTML tag="span" data={item} />
            </li>
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
  ${media.mo}{
    .bullet-lists{
      margin-top:15px;
      .desc {
        font-size:14px;
      }
    }
  }
`;