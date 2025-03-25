import { useMemo } from "react";
import { SvgTistory } from "assets/svg/BrandLogo";
import { TitlePoint } from "components/ui/TitlePoint";
import { breakpoints, colors } from "assets/style/Variable";
import { namingConventionsData as baseData, namingData } from "../../data/namingData";
import styled from "styled-components";

interface NamingContentPropsType {
  selectNaming: null | string;
}
export const NamingContent = ({selectNaming}:NamingContentPropsType) => {

  const selectNamingData = useMemo(()=> {
    return namingData.find(namingItem => namingItem.id === selectNaming) || null;
  },[selectNaming])

  return( 
    <StyleWrap>
      <div className="content-inner">
        <div 
          className={`naming-base ${selectNamingData ? 'hide':''}`}
          aria-hidden={selectNamingData ? 'true' : 'false'}
        >
          <div className="base-heading">
            <TitlePoint 
              $display="block"
              titleTag="h4"
              titleText={baseData.title}
              pointer="underline"
              $fontSize={28}
            />
            { baseData.url && (
              <a href={baseData.url} target="_blank" rel="noopener noreferrer" className="icon-link" title="티스토리 글 보러가기">
                <span className="icon"><SvgTistory /></span>
                <span className="txt">티스토리</span>
              </a>
            )}
          </div>
          <ul className="base-lists">
            { baseData.lists.map((item, idx) => (
              <li key={idx}>
                <p className="tit">
                  {item.tit}
                  <span> {item.enTit}</span>
                </p>
                <ul className="bullet-lists">
                  {item.descLists.map((descItem, descIdx) => (
                    <li className="desc circle" key={descIdx}>{descItem}</li>
                  ))}
                </ul>
                <div className="examples-box">
                  <span className="tit">사용 예:</span>
                  <ul className="code-lists">
                    {item.codeLists.map((codeItem, codeIdx) => (
                      <li key={codeIdx}>
                        <code>{codeItem}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
          { selectNamingData && (
            <div key={selectNaming} className={`naming-select fade-up`} >
              <div  className="select-heading">
                <TitlePoint 
                  titleText={selectNamingData.title} 
                  pointer="underline"
                  $fontSize={28}
                />
                <ul className="desc-lists bullet-lists">
                  {selectNamingData.desc.map((descItem, descIdx) => (
                    <li key={descIdx} className="desc circle">{descItem}</li>
                  ))}
                </ul>
                {
                  selectNamingData.section?.map((sectionItem, sectionItemIdx)=>(
                    <div className="section" key={sectionItemIdx}>
                      <TitlePoint 
                        titleText={sectionItem.sectionTit}
                        pointer="circle" 
                        $fontSize={20}
                      />
                      { sectionItem.lists.map((listsItem, listsItemIdx) => (
                        <div key={listsItemIdx} className="section-item">
                          <p className="s-tit">{`${(listsItemIdx+1)}. ${listsItem.tit}`}</p>
                          <p className="desc">{listsItem.desc}</p>
                        </div>
                      ))}
                    </div>
                  ))
                }
              </div>
            </div>
          )}
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .content-inner{
    overflow:hidden;
    max-width:${breakpoints.tab}px;
    margin:0 auto;
    padding:30px;
  }
  .naming-base{
    transition: opacity var(--transition);
    &.hide {
      visibility:hidden;
      position:absolute;
      top:0;
      opacity:0;
    }
  }

  .icon-link{
    display:inline-flex;
    align-items:center;
    gap:5px;
    margin-top:10px;
    .icon{
      display:block;
      width:15px;
      height:15px;
    }
    .txt { 
      font-size:14px;
    }
  }
  .base-lists{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    margin-top:20px;
    & > li {
      width:calc((100% - 10px) / 2);
      padding:20px;
      border-radius:10px;
      border:1px solid ${colors.lineColor};
      & > .tit{
        font-size:20px;
        & > span { 
          font-size:16px;
        }
      }
    }
    .bullet-lists{
      margin-top: 20px;
      .desc {
        position:relative;
        font-weight:400;
        color:${colors.desc};
      }
    }
  }
  .examples-box{
    display:flex;
    align-content: flex-start;
    gap:10px;
    margin-top:15px;
    .tit {
      flex-shrink: 0;
    }
  }
  .naming-select{
    .desc-lists{
      margin-top: 20px;
    }
    .section{
      margin-top:30px;
      padding-top:30px;
      border-top:1px solid ${colors.lineColor};
    }
    .section-item{
      margin-top:15px;
      padding-left:20px;
      .desc{
        margin-top:5px;
        font-size:14px;
        font-weight:400;
        color:${colors.desc};
      }
    }
  }
`;