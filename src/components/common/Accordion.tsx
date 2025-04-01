import { useState, memo, useEffect, useCallback } from "react";
import styled from "styled-components";

interface AccordionProps<T> {
  data: T[];
  mode?: "single" | "multiple"; // 하나만 열기 or 각 open
  className?: string;
  activeItems?: number[]; // 활성화 필요한 목록
  accOpt?:{
    openIcon:'arrow'
  }
  children: (item: T) => {
    heading: React.ReactNode;
    accTit: string;
    content: React.ReactNode | null;
  };
}
// 아코디언 item type
interface AccordionItemPropsType {
  heading: React.ReactNode;
  accTit: string;
  content: React.ReactNode | null;
  isActive:boolean;
  onChange: () => void;
}

export const Accordion = <T,>({
  data,
  mode = "multiple", 
  className,
  activeItems = [],
  accOpt,
  children,
}: AccordionProps<T>) => {
  const [isActives, setIsActives] = useState<number[]>([...activeItems]);

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
    <StyleWrap className={`accordion-wrap ${className ? className :''} ${accOpt?.openIcon ==='arrow' ? 'acc-arrow': ''}`}>
      { data.length > 0 ? (
        <ul>
          {
            data.map((accItem, accIdx) => {
              const { heading, accTit, content } = children(accItem);
              return (
                <MemoAccordionItem
                  key={accIdx}
                  isActive={isActives.includes(accIdx)}
                  onChange={() => handleChange(accIdx)}
                  accTit={accTit}
                  heading={heading}
                  content={content}
                />
              );
            })
          }
        </ul>
        ) : <div className="acc-empty">목록이 없습니다.</div>
      }
    </StyleWrap>
  );
};

const AccordionItem = ({
  accTit,
  heading,
  content,
  isActive,
  onChange,
}: AccordionItemPropsType) => {

  const handleClick = useCallback(() => {
    onChange();
  }, [onChange]);

  return (
    <li className={`acc-item ${isActive? 'open':''}`}>
      <div className="acc-head">
        {content ? ( 
          <button 
            type="button" 
            className="acc-btn"
            onClick={handleClick}
            title={accTit}
          >
            {heading}
            <span className="blind">{isActive ? '닫기': '열기'}</span>
          </button>
        ) : (
          <span className="acc-tit">{accTit}</span>
        )}
      </div>
      { content && (
          <div className={`acc-content`}>
            {content}
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
    padding:10px 15px 10px 0;
    svg { 
      max-width:30px;
      max-height:30px;
    }
  }

  &.acc-arrow {
    .acc-btn{ 
      width:100%;
      padding-right:30px;
      &::before, &::after{
        position:absolute;
        top:20px;
        right:12px;
        width:10px; 
        height:2px;
        border-radius:30px; 
        background:#000; 
        transform:rotate(-135deg);
        transition:transform .3s ease-in-out;
        content:'';
      }
      &::after{
        right:6px;
        transform:rotate(135deg);
      }
    }
    .open {
      .acc-btn{ 
        &::before{
          transform:rotate(-45deg);
        }
        &::after{
          transform:rotate(45deg);
        }
      }
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