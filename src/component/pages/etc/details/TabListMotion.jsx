import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { breakpoints, colors, fonts } from "component/styled/common/Variable";
import TabBtn from "component/common/TabBtn";
import Ing from "component/common/Ing";
import { ranDom } from "utils/common";

const TabListMotion = ({pcView,moView,max}) => {
  const isMobile = useSelector((state) => state.mobileChk);
  // 리스트 기본 옵션
  const listOpt = {
    pc: pcView ?? 4,
    mo: moView ?? 2,
    max: max ?? 20,
  }
  // 타입 1, 2, 임시 데이터 생성
  const categoryBg = ["빨","주","노","초","파","남","보"];
  const categoryColor =[...categoryBg];
  const listData = new Array(listOpt.max).fill("테스트").map((item, idx) => (
      {
        title:`${item}-${idx}`,
        filter: [categoryBg[ranDom(categoryBg.length-1)], categoryColor[ranDom(categoryColor.length-1)]] // 랜덤 [랜,랜] 
      }
  ));
  
  const [column, setColumn] = useState(4);
  const ListWrap = useRef();
  // 리스트 한 라인에 보여지는 수
  const widthW = useCallback(() => {
    setColumn( isMobile ? listOpt.mo : listOpt.pc)
  },[isMobile, listOpt.mo, listOpt.pc])
  const positionSetting = (e) => {
    // console.log("포오지션")
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


 

  // const random 
  console.log(listData)
  const categoryBtn = (e) => {
    console.log("category")
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
          <TabBtn $center propsList={categoryBg} propsEvent={categoryBtn}/>
          <Tit>글자색</Tit>
          <TabBtn $center propsList={categoryColor} propsEvent={categoryBtn}/>
        </TabWrap>
        <SelectWrap>
          <ListBox className="lists" ref={ListWrap}>
            {
              listData.map((list, idx) => (
                <Lists key={idx} $column={column} $top={positionSetting()} >
                  <ListTit>
                    <span>{list.title}</span>
                    <span>{list.filter[0]}라색</span>
                    <span>{list.filter[1]}라색</span>
                  </ListTit>
                </Lists>
              ))
            }
          </ListBox>
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
`;
const ListTit = styled.p`
  color:${props => props.$textColor || colors.textColor};
`;