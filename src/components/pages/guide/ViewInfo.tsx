import { media, textColor } from "assets/style/variables";
import { ExternalLink } from "components/ui/ExternalLink";
import { InnerHTML } from "components/ui/InnerHTML";
import styled from "styled-components";
import { ComponentsInfoType } from "types/guide";

interface ViewInfoPropsType {
  data: ComponentsInfoType
}
export const ViewInfo = ({data}:ViewInfoPropsType) => {
  const {info, link} = data;
  return(
    <StyleWrap className="info-box">
      <div className="info-item">
        <p className="tit">{info.title}</p>
        <InnerHTML tag="p" data={info.desc} customClass="desc" />
      </div>
      <div className="info-item">
        <ul className="bullet-lists">
          { link.map((linkItem, linkIdx) => (
            <li key={linkIdx} className="circle">
              { linkItem.link 
                ? <ExternalLink 
                    href={linkItem.link}
                    alt={linkItem.title}
                    titleText={linkItem.code}
                  />
                :<span>-</span> 
              }
            </li>
          ))}
        </ul>
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .info-item {
    margin-top:20px;
    &:first-child{
      margin-top:0;
    }
  }
  .desc{
    padding-top:10px;
    font-size:14px;
    color:${textColor.subText};
  }
  ${media.mo}{
    .info-item {
      margin-top:15px;
      &:first-child{
        margin-top:0;
      }
    }
  }
`;