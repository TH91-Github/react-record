import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { cn } from "utils/common";
interface AccdionItemTitlePropsType {
  btnTit:string;
  jsx: React.ReactNode;
  tag?: 'button' | 'span'; // button 또는 일반 span
}
interface AccordionProps<T> {
  data: T[];
  mode?: "single" | "multiple"; // 하나만 열기 or 각 open
  className?: string;
  initActive?: number[]; // 초기 활성화 필요한 목록
  smoothAni?: boolean; // 부드럽게
  accOpt?:{
    openIcon?:'arrow';
  }
  children: (accItem: T, accIdx:number) => {
    heading: AccdionItemTitlePropsType;
    content?: React.ReactNode;
  };
}

export const Accordion = <T,>({
  data,
  mode = "multiple", 
  className,
  initActive = [],
  smoothAni = false,
  accOpt = { openIcon: 'arrow'  },
  children,
}: AccordionProps<T>) => {
  const [isActives, setIsActives] = useState<number[]>(
    mode === 'single' ? (initActive.length > 0 ? [initActive[0]] : []) : [...initActive]
  );
  const handleChange = useCallback((index: number) => {
    setIsActives(prevState => {
      const isIndexActive = prevState.includes(index);
      if (mode === 'single') {
        return isIndexActive ? [] : [index];  // single 모드에서는 하나만 선택
      }
      return isIndexActive 
        ? prevState.filter(item => item !== index) // 삭제
        : [...prevState, index];  // 추가
    });
  }, [setIsActives, mode]);
  return (
    <StyleWrap 
      className={cn(
        'accordion-wrap', 
        className && className, 
        accOpt.openIcon === 'arrow' && accOpt.openIcon, // head button 화살표
        smoothAni && 'smooth'
    )}>
      { data.length > 0 ? (
        <ul>
          {data.map((accItem, accIdx) => {
            const { heading, content } = children(accItem, accIdx);
            return (
              <MemoAccordionItem
                key={accIdx}
                isActive={isActives.includes(accIdx)}
                onChange={() => handleChange(accIdx)}
                heading={heading}
                content={content}
                smoothAni={smoothAni}
              />
            );
          })}
        </ul>
        ) : <div className="acc-empty">목록이 없습니다.</div>
      }
    </StyleWrap>
  );
};

// 아코디언 item type
interface AccordionItemPropsType {
  heading: AccdionItemTitlePropsType;
  content?: React.ReactNode;
  isActive:boolean;
  smoothAni?:boolean,
  onChange: () => void;
}

const AccordionItem = ({
  heading,
  content,
  isActive,
  smoothAni,
  onChange,
}: AccordionItemPropsType) => {
  const {btnTit, jsx, tag = 'button'} = heading;
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    onChange();
  }, [onChange]);

  console.log(isActive)

  useEffect(()=>{ // smoothAni 옵션
    if(!smoothAni) return

    const contentEl = contentRef.current;
    const innerEl = innerRef.current;
    if (!contentEl || !innerEl) return;

    if(isActive){
      const boxH = contentEl.offsetHeight
      const contH = innerEl.offsetHeight;
      const totalH = boxH + contH;

      // contentEl.style.display = "block"; 
      contentEl.style.height = totalH + 'px';
      console.log(boxH)
      console.log(contH)
      console.log(totalH)

    }else{
      console.log('?')
      const height = innerEl.offsetHeight;
      contentEl.style.height = height + "px";
      const _ = contentEl.offsetHeight; 
      contentEl.style.height = "0px";

      // const onTransitionEnd = () => {
      //   if(!isActive){
      //     contentEl.style.display = "none"; // 트랜지션 종료 후 숨김
      //     contentEl.removeEventListener("transitionend", onTransitionEnd);
      //   }
      // };
      // contentEl.addEventListener("transitionend", onTransitionEnd);
    }
  },[isActive,smoothAni])

  return (
    <li className={`acc-item ${isActive? 'open':''}`}>
      <div className="acc-head">
        {tag === 'button' ? ( 
          <button 
            type="button" 
            className="acc-btn"
            onClick={handleClick}
            title={btnTit}
          >
            {jsx}
            <span className="arrow-icon"></span>
            <span className="blind">{isActive ? '닫기': '열기'}</span>
          </button>
        ) : (
          <>
            <span className="acc-tit">{jsx}</span>
          </>
        )}
      </div>
      { content && (
        <div 
          ref={contentRef}
          className="acc-content"
        >
          <div 
            ref={innerRef}
            className="acc-inner"
          >
            {content}
          </div>
        </div>
      )}
    </li>
  );
};

const MemoAccordionItem = memo(AccordionItem, (prevProps, nextProps) => {
  return(
    prevProps.isActive === nextProps.isActive
  )
});

const StyleWrap = styled.div`
  .acc-item{
    position:relative;
    &.open{
      .acc-content{
        display:block;
      }
    }
  }
  .acc-content{
    display:none;
  }
  .acc-btn, .acc-tit {
    position:relative;
    padding:10px 15px 10px 0;
    svg { 
      max-width:30px;
      max-height:30px;
    }
  }
  .arrow-icon{
    display:block;
    position:absolute;
    top:50%;
    right:10px;
    width:10px;
    height:10px;
    transform:translateY(-50%);
    &::before, &::after{
      position:absolute;
      top:0;
      right:6px;
      width:100%; 
      height:2px;
      border-radius:30px; 
      background:#000; 
      transform:rotate(-135deg);
      transition:transform .3s ease-in-out;
      content:'';
    }
    &::after{
      right:0;
      transform:rotate(135deg);
    }
  }
    
  &.arrow {
    .acc-btn{
      width:100%;
      padding-right:30px;
      text-align:left;
    }
    .open {
      .acc-btn{ 
        .arrow-icon{
           &::before{
            transform:rotate(-45deg);
          }
          &::after{
            transform:rotate(45deg);
          }
        }
      }
    }
  }
  &.smooth{
    .acc-content{
      overflow:hidden;
      position:relative;
      height: 0;
      transition: height 0.5s ease-in-out;
    }
    .acc-inner{
      position:absolute;
      top:0;
      width:100%;
    }
  }
`;




/*
  ※ 참고 설명
  ✅ 아래와 같이 타입 전달 가능
  <Accordion<Data1Type> data={GUIDE_ITEMS}>
    {(item) => ({
      accTit: (
        <div className="flex items-center gap-2">
          <span>{item.title}</span>
        </div>
      ),
      content: <div>{item.path}</div>,
    })}
  </Accordion>
  
  
  children: (item: T) => ...	각 item을 받아서 동적으로 JSX를 렌더링
  <Accordion>{(item) => <div>{item.title}</div>}</Accordion>

  tit, content 필수 전달
*/