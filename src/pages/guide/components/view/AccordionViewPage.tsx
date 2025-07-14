import { colors } from "assets/style/variables";
import { Accordion } from "components/common/Accordion";
import { accordionData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import styled from "styled-components";

type AccordionMode = 'single' | 'multiple';
interface DemoItemType {
  tit: string;
  txt: string;
  lists: { title: string; desc?: string }[];
  option?: {
    mode?: AccordionMode;
    initActive?: number[];
    smoothAni?:boolean;
  };
}

export const AccordionViewPage = () => {
  const demoData:DemoItemType[] = [
    {
      tit:'case-1',
      txt:'기본 옵션 여러개 확인',
      lists:[
        {title:"case1",desc:'내용1'},
        {title:"case2",desc:'내용2'},
        {title:"case3",desc:'내용3'},
      ],
    },
    {
      tit:'case-2',
      txt:'하나만 확인 가능',
      lists:[
        {title:"case2",desc:'내용1'},
        {title:"case2",desc:'내용2'},
        {title:"case2",desc:'내용3'},
      ],
      option:{
        mode: 'single'
      }
    },
    {
      tit:'case-3',
      txt:'초기 원하는 순서 활성화 index 2번 활성 : EX: initActive:number[] - initActive[2,3] / initActive[2]',
      lists:[
        {title:"case3",desc:'내용1'},
        {title:"case3",desc:'내용2'},
        {title:"case3",desc:'내용3'},
      ],
      option:{
        initActive:[2]
      }
    },
    {
      tit:'case-4',
      txt:'부드럽게 on/off',
      lists:[
        {title:"타이틀1",desc:'부드럽게 on/off 내용'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
      option:{
        smoothAni:true
      }
    },
    {
      tit:'case-5',
      txt:'타이틀만 있고 하위가 없는 경우 타이틀 button 대신 span으로',
      lists:[
        {title:"타이틀1"},
        {title:"타이틀2"},
        {title:"타이틀3", desc:'내용3'},
      ],
    },
    
  ]
  return(
    <StyleWrap className="view-wrap accordion">
      <div className="view-item">
        <ViewInfo data={accordionData} />
      </div>
      <div className="view-item">
        <p className="tit">Accordion 데모</p>
        <div className="example-lists">
          {
            demoData.map(demoItem => (
              <div className="example-item" key={demoItem.tit}>
                <p className="s-tit">{demoItem.tit}</p>
                <p className="desc">{demoItem.txt}</p>
                <Accordion 
                  data={demoItem.lists} 
                  mode={demoItem.option?.mode ?? 'multiple'}
                  initActive={demoItem.option?.initActive ?? undefined}
                  smoothAni={demoItem.option?.smoothAni}
                >
                  {(accItem, accIdx) => ({ // accItem, accIdx를 활용하여 UI & 추가 커스텀 가능
                    heading: {
                      btnTit: accItem.title, // 버튼 타이틀
                      jsx:(<> 
                        <span className="tit">{accItem.title} - {accIdx+1}</span>
                      </>),
                    },
                    content: 
                      accItem.desc ? (
                        <div>
                          <p>{accItem.desc}</p>
                          <p>{accItem.desc}</p>
                        </div>)
                      : null
                  })}
                </Accordion>
              </div>
            ))
          }
          
        </div>
      </div>
      <div className="view-item">
        <ViewCode data={accordionData} />
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .view-item{
    margin-top:30px;
    padding-top:30px;
    border-top:1px solid ${colors.lineColor};
    .tit{ 
      font-size: 18px;
    }
    &:first-child{
      margin-top:0;
      padding-top:0;
      border-top:none;
    }
  }
  .example-lists {
    display:flex;
    flex-direction: column;
    margin-top:15px;
  }
  .example-item{
    .s-tit {
      margin-bottom:10px;
      font-size:18px;
    }
    &:first-child ~ .example-item{
      margin-top:20px;
      padding-top:15px;
      border-top:1px solid ${colors.lineColor};
    }
    .desc {
      margin-top:10px;
      & > span {
        color: ${colors.mSlateBlue};
      }
    }
  }
  .accordion-wrap{
    margin-top:10px;
    & > ul {
      display:flex;
      flex-direction:column;
      gap:5px;
    } 
  }
  .acc-item{
    border-radius:5px;
    border:1px solid ${colors.lineColor};
    &.open {
      border-color:${colors.mSlateBlue};
    }
    .acc-btn{
      padding:10px;
    } 
  }
  .acc-inner{
    padding:10px;
    border-top:1px solid ${colors.lineColor};
  }
`;