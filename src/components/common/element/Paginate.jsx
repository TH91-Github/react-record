import { colors } from "component/styled/common/Variable";
import { useState } from "react";
import styled from "styled-components";

function Paginate ({propsOpt, propsEvent}) {
  const paginateData = propsOpt ?? [];
  const {total, num, cutNum} = paginateData; // 총, 현재 Num, 한 줄에 보여지는 Num
  const totalNum = total;
  const [pageNum, setPageNum] = useState(num);
  const cutPaginate = cutNum??10;
  const quotient = Math.floor((pageNum-1)/cutPaginate);
  const PaginateList = paginateData <=0 
    ? Array(1).fill(1) 
    : Array.from({length: cutPaginate*(quotient+1) > totalNum ? totalNum-(cutPaginate*(quotient)) : 10}, (v,i)=> i+cutPaginate*(quotient)+1 ); 
  function pageFunction (selectNum){
    setPageNum(selectNum);
    propsEvent && propsEvent(selectNum)
  }

  return (
    <PaginateWrap>
      <PrevBtn disabled={pageNum <= 1 && true || pageNum === undefined } onClick={() => pageFunction(pageNum-1)}>
        <LeftArrow>prev</LeftArrow>
      </PrevBtn>
      <PaginateFlex>
        {
          PaginateList.map((num, idx) => (
            <li key={idx} >
              <PaginateBtn type="button" className={pageNum === num && "active"} onClick={() => pageFunction(num)}>
                <span>{num}</span>
              </PaginateBtn>
            </li>
          ))
        }
      </PaginateFlex>
      <NextBtn disabled={pageNum >= totalNum && true || pageNum === undefined } onClick={() => pageFunction(pageNum+1)}>
        <RightArrow>next</RightArrow>
      </NextBtn>
    </PaginateWrap>
  )
}
export default Paginate;

const PaginateWrap = styled.div`
    display:flex;
    justify-content:center;
    margin:0 auto;
`;
const PaginateFlex = styled.ul`
  display:flex;
`;
const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
`;
const ArrowButton = styled(Button)`
  overflow:hidden;
  border:1px solid ${colors.lineColor};
  &:hover, &:focus {
    &>span{
      &::before {
        background: ${colors.green};
      }
      &::after {
        background: ${colors.yellow};
      }
    }
  }
  &:disabled {
    cursor: default;
    &>span{
      &::before, &::after{
        background:${colors.lineColor};
        opacity:0.5;
      }
    }
  }
`;
const PrevBtn = styled(ArrowButton)`
  width:30px;
  height:30px;
  border-top-left-radius:10px;
  border-bottom-left-radius:10px;
  border-right:none;
`;
const NextBtn = styled(ArrowButton)`
  width:30px;
  height:30px;
  border-top-right-radius:10px;
  border-bottom-right-radius:10px;
`;
const ArrowICon = styled.span`
  display:inline-block;
  position:relative;
  width:50%;
  height:100%;
  text-indent:-9999px;
  &::before {
    position:absolute;
    top:8px;
    left:0;
    width:3px;
    height:12px;
    border-radius:4px;
    background:rgba(123,123,123,.7);
    transform:rotate(45deg) translateY(-50%);
    transition:all .3s;
    content:"";
  }
  &::after {
    position:absolute;
    bottom:8px;
    left:0;
    width:3px;
    height:12px;
    border-radius:4px;
    background:rgba(123,123,123,.7);
    transform:rotate(135deg) translateY(-50%);
    transition:all .3s;
    content:"";
  }
`;
const LeftArrow = styled(ArrowICon)`
  left:0;
`;
const RightArrow = styled(ArrowICon)`
  right:0;
  transform:rotate(180deg);
`;
const PaginateBtn = styled(Button)`
  position:relative;
  width:30px;
  height:30px;
  border:1px solid ${colors.lineColor};
  border-right:transparent;
  transition:all .3s;
  text-align:center;
  &.active {
    z-index:1;
    border:1px solid ${colors.green};
    transform:scale(1.1);
    color: ${colors.green};
    &>span {
      border-bottom:1px solid ${colors.green};
    }
  }
`;