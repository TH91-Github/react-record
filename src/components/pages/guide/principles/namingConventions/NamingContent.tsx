import { breakpoints, colors } from "assets/style/Variable";
import { SvgTistory } from "assets/svg/BrandLogo";
import styled from "styled-components";
import { namingConventionsData as baseData, namingData } from "../../data/namingData";
import { useEffect, useMemo, useState } from "react";

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
            <h4 className="title">{baseData.title}</h4>
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
                    <li key={descIdx} className="desc">{descItem}</li>
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
                <h4 className="title">{selectNamingData.title}</h4>
              </div>
              
            </div>
          )}
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .content-inner{
    max-width:${breakpoints.tab}px;
    margin:0 auto;
    padding:30px;
  }
  .naming-base{
    transition: opacity var(--transition);
    &.hide {
      position:absolute;
      opacity:0;
    }
  }

  h4.title {
    font-size:28px;
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
      margin-top:15px;
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
`;