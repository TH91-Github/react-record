import { guideComponentView } from "assets/style/guide/guideComponentView";
import { colors } from "assets/style/variables";
import { InputText } from "components/common/InputText";
import { inputTextData } from "components/pages/guide/data/componentsInfo";
import { ViewCode } from "components/pages/guide/ViewCode";
import { ViewInfo } from "components/pages/guide/ViewInfo";
import styled from "styled-components"

interface DemoItemType {
  tit: string;
  desc: string;
  option?: {
    type?:'text'|'password';
    initVal?:string;
    disabled?:boolean;
    error?:boolean;
    placeholder?:string;
    $defaultLine?:'line' | 'line-bottom' | 'line-left' | 'none';
    $focusColor?:string,
    $lineColor?:string;
  };
}

export const InputTextViewPage = () => {
  const demoData:DemoItemType[] = [
    {
      tit:'case-1',
      desc:'기본 Input',
    },
    {
      tit:'case-2',
      desc:'type password',
      option:{
        type:'password'
      }
    },
    {
      tit:'case-3',
      desc:'disabled & 초깃값 설정',
      option:{
        disabled:true,
        initVal:'초깃값'
      }
    },
    {
      tit:'case-4',
      desc:'error : error={true}',
      option:{
        error:true,
      }
    },
    {
      tit:'case-5',
      desc:'placeholder',
      option:{
        placeholder:'placeholder 입력해주세요.'
      }
    },
    {
      tit:'case-6',
      desc:'$defaultLine - line 방향, $focusColor 포커스 시, $lineColor: 라인 color',
      option:{
        placeholder: 'line-bottom 및 green 색상 적용',
        $defaultLine:'line-bottom',
        $focusColor:colors.green,
        $lineColor: colors.green
      }
    }
  ]

  return (
    <StyleWrap>
      <div className="view-item">
        <ViewInfo data={inputTextData} />
      </div>
      <div className="view-item">
        <p className="tit">Input 데모</p>
        <div className="example-lists">
          { demoData.map((demoItem, demoIdx) =>(
            <div className="example-item" key={`${demoItem.tit} ${demoIdx}`}>
              <p className="s-tit">{demoItem.tit}</p>
              <p className="desc">{demoItem.desc}</p>
              <InputText 
                id={`guide-input-${demoIdx}`}
                type={demoItem.option?.type || 'text'}
                disabled={demoItem.option?.disabled}
                initVal={demoItem.option?.initVal}
                error={demoItem.option?.error}
                placeholder={demoItem.option?.placeholder}
                styleOpt={
                  { 
                    $defaultLine:demoItem.option?.$defaultLine,
                    $focusColor:demoItem.option?.$focusColor,
                    $lineColor:demoItem.option?.$lineColor,
                  }
                }
              />
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