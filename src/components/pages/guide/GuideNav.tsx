import { colors } from "assets/style/Variable";
import { SvgBook, SvgCode, SvgFolder, SvgPuzzle, SvgSetting, SvgSquareStack } from "assets/svg/Common";
import { Accordion } from "components/common/Accordion";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { guideList } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

export const GUIDE_NAV_LIST = guideList;
export const GuideNav = () =>{
  const iconTit:{[key:string] : React.ReactNode} = useMemo(() =>{ 
    return {
      Principles: <SvgBook/>, // 규칙
      Foundation: <SvgSetting />, // 기본 가이드
      Assets: <SvgFolder/>,
      Components: <SvgSquareStack/>,
      Hooks: <SvgCode/>,
      Utils: <SvgPuzzle/>,
      Preferences: <SvgSetting />,
    };
  },[]);

  return (
    <StyleWrap className="nav">
      <nav>
        <Accordion data={GUIDE_NAV_LIST} accOpt={{openIcon:'arrow'}}>
          {(item) => ({
            accTit: (
              <>
                <span className="icon">{iconTit[item.id]}</span>
                <span className="tit">{item.title}</span>
              </>
            ),
            content: (
              item.children
              ? (
                <div className="nav-depth">
                  <ul>
                    {
                      item.children && item.children.map((childrenItem, childrenIdx) => (
                      <li className="depth-item" key={childrenIdx}>
                        <NavLink to={`${item.path}/${childrenItem.path}`} className="link">
                          <span>{childrenItem.title}</span>
                        </NavLink>
                      </li>
                      ))
                    }
                  </ul>
                </div>
              )
              : null
            ),
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
  .acc-btn, .acc-tit{
    display:flex;
    align-items:center;
    gap:10px;
    .icon{
      display:block;
      width:20px;
      height:20px;
    }
  }
  .acc-content {
  
  }
  .nav-depth{
   
  }
  .depth-item{
    position:relative;
    padding-left:25px;
    font-size:14px;
    &::before{
      position:absolute;
      top:0;
      left:10px;
      width:1px;
      height:100%;
      background:#000;
      content:'';
    }
    &::after {
      position:absolute;
      top:50%;
      left:10px;
      width:10px;
      height:1px;
      border-bottom-left-radius:50%;
      background:#000;
      transform: translateY(-50%);
      content:'';
    }
    &:last-child {
      &::before {
        height:50%;
        content:''
      }
    }
    .link{
      display:block;
      padding:8px 10px;
      border-radius:5px;
      border-bottom:1px solid transparent;
      background:transparent;
      transition: border-color var(--transition), background var(--transition);
      &.active {
        border-color:${colors.lineColor};
        background:#fff;
        font-weight:600;
        color: ${colors.mSlateBlue};
      }
    }
  }
`;