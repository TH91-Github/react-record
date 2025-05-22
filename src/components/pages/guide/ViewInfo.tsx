import { textColor } from "assets/style/variables";
import { ExternalLink } from "components/ui/ExternalLink";
import { InnerHTML } from "components/ui/InnerHTML";
import styled from "styled-components";
import { ComponentsInfoType } from "types/guide";

interface ViewInfoPropsType {
  data: ComponentsInfoType
}
export const ViewInfo = ({data}:ViewInfoPropsType) => {
  const {info, hook, link} = data;
  return(
    <StyleWrap className="info-box">
      <div className="info-item">
        <p className="tit">{info.title}</p>
        <InnerHTML tag="p" data={info.desc} customClass="desc" />
      </div>
      { hook.length > 0 && (
        <div className="info-item">
          <p className="tit">사용한 Custom Hooks</p>
          <ul className="code-lists">
            { hook.map((hookItem, hookIdx) => (
              <li key={hookIdx}>
                <code>{hookItem.title}</code>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="info-item">
        <ul className="bullet-lists">
          { link.map((linkItem, linkIdx) => (
            <li key={linkIdx} className="circle">
              { linkItem.link 
                ? <ExternalLink 
                  href={linkItem.link}
                  titleText={linkItem.title}
                />
                :<span>{linkItem.title} : -</span>
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
  .tit {
    padding-bottom:10px;
  }
  .desc{
    color:${textColor.subText};
  }
`;