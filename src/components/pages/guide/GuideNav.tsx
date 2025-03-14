import { colors } from "assets/style/Variable";
import { SvgCode, SvgSetting } from "assets/svg/common";
import { Accordion } from "components/common/Accordion";
import { useMemo } from "react";
import { guideList } from "routes/pages/guide/GuideRouter";
import styled from "styled-components"

const GUIDE_ITEMS = guideList;
export const GuideNav = () =>{


  const iconTit:{[key:string] : React.ReactNode} = useMemo(() =>{ 
    return {
      principles: <SvgCode/>,
      Foundation: <SvgSetting />,
    };
  },
    []
  );

  return (
    <StyleWrap className="nav">
      <nav>
        <Accordion data={GUIDE_ITEMS} >
          {(item) => ({
            accTit: (
              <>
                <span className="icon">{iconTit[item.id]}</span>
                <span className="tit">{item.title}</span>
              </>
            ),
            content: <div>{item.path}</div>,
          })}
        </Accordion>
      </nav>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .accordion-wrap{
    margin-top:10px;
    border-top:1px solid ${colors.lineColor};
  }
  .acc-btn{
    display:flex;
    align-items:center;
    gap:10px;
    .icon{
      width:24px;
      height:24px;
    }
  }
`;