import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { breakpoints, colors, fonts } from "component/styled/common/Variable";
import TabBtn from "component/common/TabBtn";
import Ing from "component/common/Ing";
import { ranDom } from "utils/common";

const TabListMotion = () => {
  const isMobile = useSelector((state) => state.mobileChk);

  const listOpt = { pc: 4, mo: 2}
  const column = useMemo(() => { 
    return isMobile ? listOpt.mo : listOpt.pc 
  },[isMobile, listOpt.mo, listOpt.pc])
  const categoryBg = ["전체","빨강","초록","노랑","파랑"];
  const categoryColor =[...categoryBg];
  const maxList = 20;
  const listData = new Array(maxList).fill("테스트").map((item, idx) => (
    {
      title:`${item}-${idx+1}`,
      filter: [categoryBg[ranDom(categoryBg.length-2)+1], categoryColor[ranDom(categoryColor.length-2)+1]] // 랜덤 [랜,랜] 
    }
  ));
  
  const [baseData, setBaseData] = useState(listData);
  const [selectTab, setSelectTab] = useState(['','']);
  
  const ListWrap = useRef(); // ul

  const selectFilter= (el,typeChk) => { // 선택한 탭에 맞는 리스트 변환
  
  }

  // 리스트 한 라인에 보여지는 수 체크와 가로 값 지정
  const widthW = useCallback(() => {
   
  },[])


  const positionSetting = () => {
   
  }

  // Resize
  const handleReSize = useCallback(()=> {
    widthW();
  },[widthW])

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, [handleReSize]);
  
  const categoryBtn = (e,num) => {

  }

  return (
    <div>
      <Ing>⚠️작업중</Ing>
      <Inner>
        <DescWrap>
          <Tit>선택에 맞는 리스트 노출 및 모션</Tit>
          <Txt>배경색, 글자색 선택에 맞는 리스트 노출.</Txt>
          <Txt>리스트 display none, block으로 설정. 움직임을 나타내기 위해</Txt>
          <Txt>리스트 수 - {maxList}</Txt>
        </DescWrap>
        <TabWrap>
          <Tit>배경색</Tit>
          <TabBtn $center propsList={categoryBg} propsEvent={(e)=>categoryBtn(e,0)}/>
          <Tit>글자색</Tit>
          <TabBtn $center propsList={categoryColor} propsEvent={(e)=>categoryBtn(e,1)}/>
        </TabWrap>
        <SelectWrap>
          {
            baseData.length > 0 
            ? 
            <ListBox className="lists base-ui" ref={ListWrap}>
              {
                baseData.map((list, idx) => (
                  <Lists key={idx} $column={column}>
                    <ListTit>
                      <span>{list.title}</span>
                      <span>{list.filter[0]}</span>
                      <span>{list.filter[1]}</span>
                    </ListTit>
                  </Lists>
                ))
              }
            </ListBox>
            : 
            <ExceptionWrap>
              <p>{`배경색: ${selectTab[0]} / 글자색: ${selectTab[1]} 해당 되는 정보가 없습니다.`}</p>
            </ExceptionWrap>
          }
        </SelectWrap>
      </Inner>
    </div>
  )
}
export default TabListMotion;

// styled-components
const Inner = styled.div`
  position:relative;
  width:100%;
  margin:0 auto;
  padding:0 30px 80px;
  max-width:${breakpoints.table}px;
`;
const DescWrap = styled.div`
padding-top:20px;
  text-align:center;
`;
const Tit = styled.p`
  margin:10px 0;
  text-align:center;
`;
const Txt = styled.p`
  font-size:${fonts.size14}px;
  line-height:${fonts.size14 + 4}px;
  color:${colors.subTextColor};
  & + & {
    margin-top:10px;
  }
`;
const TabWrap = styled.div`
  padding-top:20px;
`;
const SelectWrap = styled.div`
  margin-top:30px;
  padding-top:30px;
  border-top:2px solid ${colors.lineColor};
`; 
const ListBox = styled.ul`
  display:flex;
  flex-wrap:wrap;
  &.base-ui {
    & > li {
      position:relative;
    }
  }
`;
const Lists = styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  ${props => `
    ${!props.$column && 'width: auto'};
    ${props.$column && `width: calc(100% / ${props.$column})`};
  `};
  height:150px;
  border:1px solid ${colors.lineColor};
`;
const ListTit = styled.p`
  color:${props => props.$textColor || colors.textColor};
  &>span { 
    display:block;
  }
  text-align:center;
`;
const ExceptionWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:200px;
  & > p {

  }
`