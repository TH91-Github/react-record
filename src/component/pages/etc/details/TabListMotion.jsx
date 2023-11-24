import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { breakpoints, colors, fonts, media } from "component/styled/common/Variable";
import TabBtn from "component/common/TabBtn";
import SubTitleBar from "component/common/SubTitleBar";

import { ranDom } from "utils/common";

// 고정 값 
const listOpt = {pc:4, mo:2, max:20}; // pc, mo 열 값 / 리스트 총 수
const categoryBg = ["전체","#cc9cd9","#f2522e","#f2cb05","#63bf94","#1a6dd9"];
const categoryColor =[...categoryBg];
const newData = new Array(listOpt.max).fill("테스트").map((item, idx) => (
  {
    title:`${item}-${idx+1}`,
    filter: [categoryBg[ranDom(categoryBg.length-2)+1], categoryColor[ranDom(categoryColor.length-2)+1]] // 랜덤 [랜,랜] 
  }
))
let timer; 

const TabListMotion = () => {
  const isMobile = useSelector((state) => state.mobileChk);
  const column = useMemo(() => (isMobile ? listOpt.mo : listOpt.pc),[isMobile]);
  const [loading, setLoading] = useState(false); 
  const [selectTab, setSelectTab] = useState(['','']);
  const ListWrap = useRef(); // ul
  const ListArr = useRef([""]);

  const selectFilter = (el,typeChk) => { // 선택한 탭에 맞는 리스트 변환
    const filterLi = ListWrap.current.querySelectorAll('li');
    const pick = el === '전체' ? '' : el
    const newTab = [...selectTab];
    newTab[typeChk] = pick;
    ListArr.current = [...filterLi].filter((item) => {
      const dataBg = item.dataset.bg;
      const dataColor = item.dataset.color;
      const filterChk = (dataBg === newTab[0] || newTab[0] === '') && (dataColor === newTab[1] || newTab[1] === '') 
      filterChk ? item.style.display='flex':item.style.display='none'; 
      return filterChk && item
    })
    setSelectTab(newTab); // 선택된 탭
    widthW();
    positionSetting();
    !loading && setLoading(true);
  }
  
  // 리스트 한 라인에 보여지는 수 체크와 가로 값 지정 & resize
  const widthW = useCallback(() => {
    const listWidth = ListWrap.current.clientWidth;
    const itemWidth = (listWidth/column).toFixed(2);
    const list = ListArr.current;
    Array.prototype.forEach.call(list,(item) => {
      item.style.width = `${itemWidth}px`;
    })
    
  },[column])

  // 위치 값 지정
  const positionSetting = useCallback(() => { 
    const posUl = ListWrap.current.querySelector('ul');
    const posLi = ListArr.current;
    const _duration = 300;
    const lineHArr = [];
    let baseClassChk;

    posUl.classList.value.includes("base-ui")
    ?  baseClassChk = setInterval(()=>{
      posUl.classList.value.includes("base-ui") ? posUl.classList.remove("base-ui")
      : clearInterval(baseClassChk)
    },50)
    : clearInterval(baseClassChk)

    posLi.forEach((item,idx)=>{
      const elH = item.getBoundingClientRect().height.toFixed(2);
      const elW = posLi.length > 0 ? posLi[0].getBoundingClientRect().width : 0
      const elRow = Math.floor(idx / column); // row 행
      const elColumn = idx % column; // column 열
      const xLine = lineHArr[elRow]; // 현재 행 값
      // 행별 최대 높이 값 입력
      !xLine ? lineHArr.push(parseFloat(elH)) : lineHArr[elRow] = parseFloat(Math.max(xLine,elH))
      const rowTop = lineHArr.reduce((prev,cur,idx)=>{ // 이전 행의 최대 높이를 top으로 지정한다
        return idx+1 < lineHArr.length ? prev + cur : prev 
      },0)

      const resultTop = rowTop;
      const resultLeft = elW * elColumn;

      if(loading){
        const movingT = resultTop - item.style.top.replace('px', '')
        const movingL = resultLeft - item.style.left.replace('px', '')
        item.style.transitionDuration = `${_duration}ms`;
        item.style.transform = `translate3d(${movingL}px, ${movingT}px , 0)`;
      }else{
        item.style.top = `${resultTop}px`;
        item.style.left = `${resultLeft}px`;
      }

      setTimeout(()=>{
        item.style.removeProperty('transition-duration');
        item.style.removeProperty('transform');
        item.style.top = resultTop + "px";
        item.style.left = resultLeft + "px";
      },_duration)
    })
    if(posLi.length > 0){
      posUl.style.transitionDuration = `${_duration}ms`;
      posUl.style.height = (lineHArr.reduce((prev,cur) => (prev+cur),0)) + "px";
      setTimeout(()=>{
        posUl.style.removeProperty('transition-duration');
      },_duration)
    }else{
      posUl.style.height ='auto';
    }
  },[column, loading]);

  // 초기 리스트 업
  const listAdd = () => {
    const addWrap = ListWrap.current.querySelector('ul');
    const addLi =  addWrap.querySelectorAll('li');
    ListArr.current = [...addLi];
  }
  useEffect(()=> {
    listAdd();
  },[])

  // Resize
  const handleReSize = useCallback(()=> {
    if(!loading){
      widthW();
      positionSetting();
    }else{
      clearTimeout(timer);
      timer = setTimeout( ()=>{
        widthW();
        positionSetting();
      },500);
    }
  },[loading, widthW, positionSetting])

  useEffect(() => {
    handleReSize();
    window.addEventListener("resize", handleReSize);
    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, [handleReSize]);
  
  const categoryBtn = (e,num) => {
    selectFilter(e,num); // 선택된 조건에 맞는 Data
  }

  return (
    <div>
      <Inner>
      <SubTitleBar $align="center">선택에 맞는 리스트 필터 및 움직이는 효과</SubTitleBar>
        <DescWrap>
          <Txt>배경색, 글자색 선택에 맞는 리스트 노출.</Txt>
          <Txt>리스트 display none, block으로 설정. 움직임을 나타내기 위해</Txt>
          <Txt>리스트 수 - {listOpt.max}</Txt>
        </DescWrap>
        <TabWrap>
          <Tit>배경색</Tit>
          <TabBtn $center propsList={categoryBg} propsEvent={(e)=>categoryBtn(e,0)}/>
          <Tit>글자색</Tit>
          <TabBtn $center propsList={categoryColor} propsEvent={(e)=>categoryBtn(e,1)}/>
        </TabWrap>
        <SelectWrap ref={ListWrap}>
          <ListBox className={"lists " + (!loading && "base-ui")} >
            {
              newData.map((list, idx) => (
                <Lists 
                  $column={column} 
                  $bg={list.filter[0]}
                  $color={list.filter[1]}
                  data-bg={list.filter[0]}
                  data-color={list.filter[1]} 
                  key={idx}>
                  <ListTit>
                    <span>{list.title}</span>
                    <span>BG - {list.filter[0]}</span>
                    <span>COLO - {list.filter[1]}</span>
                  </ListTit>
                </Lists>
              ))
            }
          </ListBox>
          {
            ListArr.current.length < 1 &&
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
  overflow:hidden;
  position:relative;
  width:100%;
  margin:0 auto;
  padding:30px 30px 80px;
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
  position:relative;
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
    ${props.$bg && `background:${props.$bg}`};
    ${props.$color && `color:${props.$color}`};
  `};
  height:150px;
  border:1px solid ${colors.lineColor};
`;
const ListTit = styled.p`
  &>span { 
    display:block;
    padding:5px 10px;
    border-radius:5px;
    background:rgba(255,255,255,.5);
    text-shadow: 1px 1px 1px rgba(0,0,0,.8);
    &:first-child{
      color:${colors.textColor};
    }
  }
  text-align:center;
  ${media.mo} {
    font-size:${fonts.size14}px;
  }
`;
const ExceptionWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  min-height:200px;
`