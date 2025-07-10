import { colors } from "assets/style/variables";
import { accordionData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import styled from "styled-components";

export const AccordionViewPage = () => {
  const demoData = [
    {
      tit:'case-1',
      txt:'기본 옵션',
      lists:[
        {title:"타이틀1",desc:'내용1'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
      option:{

      }
    },
    {
      tit:'case-2',
      txt:'하나만 확인 가능',
      lists:[
        {title:"타이틀1",desc:'내용1'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
      option:{
        
      }
    },
    {
      tit:'case-3',
      txt:'여러개 확인 가능',
      lists:[
        {title:"타이틀1",desc:'내용1'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
      option:{
        
      }
    },
    {
      tit:'case-4',
      txt:'부드럽게 on/off',
      lists:[
        {title:"타이틀1",desc:'내용1'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
    },
    {
      tit:'case-5',
      txt:'타이틀만 있고 하위가 없는 경우 타이틀 button 대신 span으로',
      lists:[
        {title:"타이틀1",desc:'내용1'},
        {title:"타이틀2",desc:'내용2'},
        {title:"타이틀3",desc:'내용3'},
      ],
      option:{
        
      }
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
          <div className="example-item">
            <p className="s-tit">기본 타입</p>
            
            {/* <Accordion /> */}
            <p className="desc">기본 : data / changeEvent 함수</p>
          </div>
          <div className="example-item">
            <p className="s-tit">활성화 표시 moving 타입</p>
          </div>
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
    &:first-child + .example-item{
      margin-top:15px;
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
`;