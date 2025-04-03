import { colors } from "assets/style/variable";
import { SvgBook, SvgCode, SvgDesign, SvgFolder, SvgPuzzle, SvgRectangleStack, SvgSetting, SvgSquareStack } from "assets/svg/Common";
import { Accordion } from "components/common/Accordion";
import { MemoTreeLists, TreeItemType } from "components/ui/TreeLists";
import { useLocationCurrent } from "hooks/useLocationCustom";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

interface NavItemType extends TreeItemType {
  path: string;
  id: string;
  element?: React.ReactElement;
  children?: NavItemType[];
}

export const GuideNav = () =>{
  const {locationIdx} = useLocationCurrent(GUIDE_LIST, 'id', 1);

  const iconTit:{[key:string] : React.ReactNode} = useMemo(() =>{ 
    return {
      principles: <SvgBook/>, // 규칙
      design: <SvgDesign />, 
      ui: <SvgRectangleStack />, 
      assets: <SvgFolder/>,
      components: <SvgSquareStack/>,
      hooks: <SvgCode/>,
      utils: <SvgPuzzle/>,
      preferences: <SvgSetting />,
    };
  },[]);

  return (
    <StyleWrap className="nav">
      <nav>
        <Accordion data={GUIDE_LIST} activeItems={[locationIdx]} accOpt={{openIcon:'arrow'}}>
          {(item) => ({
            heading: (
              <>
                <span className="icon">{iconTit[item.id]}</span>
                <span className="tit">{item.title}</span>
              </>
            ),
            accTit:item.title,
            content: (
              item.children ? (
                <div className="nav-depth">
                  <MemoTreeLists<NavItemType> data={item.children} firstStart={true}>
                    {(childrenItem) => ({
                      content: (
                        <>
                          <NavLink to={`${item.path}/${childrenItem.path}`} className="link" title={`${childrenItem.title} 보기`}>
                            <span>{childrenItem.title}</span>
                          </NavLink>
                        </>
                      ),
                      customClass:'depth-item'
                    })}
                  </MemoTreeLists>
                </div>
              ) : null
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
    .tit{
      font-weight:500;
    }
  }
  .acc-content {
  
  }
  .nav-depth{
   
  }
  .tree-lists.custom {
    .depth-item{
      padding-top:0;
      padding-bottom:0;
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
  }
  
`;