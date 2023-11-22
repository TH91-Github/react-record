import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { breakpoints, colors, fonts } from "component/styled/common/Variable";
import TabBtn from "component/common/TabBtn";
import Ing from "component/common/Ing";
import { ranDom } from "utils/common";

const TabListMotion = () => {
  // s: TEST Data
  const listOpt = { pc: 4, mo: 2, max: 20,}
  const categoryBg = ["전체","빨강","초록","노랑","파랑"];
  const categoryColor =[...categoryBg];
  const listData = new Array(listOpt.max).fill("테스트").map((item, idx) => (
    {
      title:`${item}-${idx+1}`,
      filter: [categoryBg[ranDom(categoryBg.length-2)+1], categoryColor[ranDom(categoryColor.length-2)+1]] // 랜덤 [랜,랜] 
    }
  ));
  // e: TEST Data
  
  const isMobile = useSelector((state) => state.mobileChk);
  const [baseData, setBaseData] = useState(listData);
  const [viewData, setViewData] = useState(listData);
  const [selectTab, setSelectTab] = useState(['','']);
  
  const [column, setColumn] = useState(4);
  const ListWrap = useRef();
  // 리스트 한 라인에 보여지는 수
  const widthW = useCallback(() => {
    setColumn( isMobile ? listOpt.mo : listOpt.pc)
  },[isMobile, listOpt.mo, listOpt.pc])
  const positionSetting = (e) => {
    // console.log("포지션")
  }

  // Resize
  const handleReSize = useCallback(()=> {
    widthW();
    positionSetting();
  },[widthW])

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, [handleReSize]);

  const selectList= (el,typeChk) => { // 선택한 탭에 맞는 리스트 변환
    const pick = el === '전체' ? '' : el
    const newTab = [...selectTab];
    newTab[typeChk] = pick;
    const filterTab1 = listFilter(baseData,0); // 1차 필터
    const filterTab2 = listFilter(filterTab1,1); // 2차 필터
    function listFilter (fData,num) {
      return fData.filter(item => (item.filter[num] === newTab[num] || newTab[num] === '') && item)
    }
    setSelectTab(newTab); // 선택된 탭
    setViewData(filterTab2); // 조건에 맞는 리스트
  }
  const categoryBtn = (e,num) => {
    selectList(e,num);
  }

  return (
    <div>
      <Ing>⚠️작업중</Ing>
      <Inner>
        <DescWrap>
          <Tit>선택에 맞는 리스트 노출 및 모션</Tit>
          <Txt>배경색, 글자색 선택에 맞는 리스트 노출.</Txt>
          <Txt>리스트 수 - {listOpt.max}</Txt>
        </DescWrap>
        <TabWrap>
          <Tit>배경색</Tit>
          <TabBtn $center propsList={categoryBg} propsEvent={(e)=>categoryBtn(e,0)}/>
          <Tit>글자색</Tit>
          <TabBtn $center propsList={categoryColor} propsEvent={(e)=>categoryBtn(e,1)}/>
        </TabWrap>
        <SelectWrap>
          {
            viewData.length > 0 
            ? 
            <ListBox className="lists" ref={ListWrap}>
              {
                viewData.map((list, idx) => (
                  <Lists key={idx} $column={column} $top={positionSetting()} >
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
  border-top:2px solid ${colors.lineColor};
`; 
const ListBox = styled.ul`
  display:flex;
  flex-wrap:wrap;
`;
const Lists = styled.li`
  display:flex;
  justify-content:center;
  align-items:center;
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