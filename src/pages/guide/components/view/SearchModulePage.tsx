import { guideComponentView } from "assets/style/guide/guideComponentView";
import { SearchModule } from "components/modules/SearchModule";
import { inputTextData } from "components/pages/guide/data/componentsInfo";
import { searchModuleData } from "components/pages/guide/data/moduleData";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import styled from "styled-components";

interface propsDataType{
  id:string;
  keyword:string[];
}
interface DemoItemType {
  tit: string;
  desc: string;
  propsData:propsDataType[]
};

export const SearchModulePage = () => {
  const demoData:DemoItemType[] = [
    {
      tit:'case-1',
      desc:'기본 search module',
      propsData:[
        {
          id:'데모',
          keyword:['demo', '데모',]
        },
        {
          id:'키워드',
          keyword:['키워드','keyword']
        },
      ],
    },
  ]
  
  return (
    <StyleWrap>
      <div className="view-item">
        <ViewInfo data={searchModuleData} />
      </div>
      <div className="view-item">
        <p className="tit">Input 데모</p>
        <div className="example-lists">
          { demoData.map((demoItem, demoIdx) =>(
            <div className="example-item" key={`${demoItem.tit} ${demoIdx}`}>
              <p className="s-tit">{demoItem.tit}</p>
              <p className="desc">{demoItem.desc}</p>
              <ul className="sample-lists">
                {
                  demoItem.propsData.map((demoK:propsDataType)=><li key={demoK.id}>{demoK.keyword}</li>)
                }
              </ul>
              <SearchModule id="demo-search" data={demoItem.propsData} />
            </div>
          ))}
        </div>
        <div className="view-item">
          <ViewCode data={inputTextData} />
        </div>        
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
${guideComponentView}
`;