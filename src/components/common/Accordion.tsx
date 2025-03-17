import { useState, memo, useEffect, useCallback } from "react";
import styled from "styled-components";

interface AccordionProps<T> {
  data: T[];
  mode?: "single" | "multiple"; // 하나만 열기 or 각 open
  className?: string,
  accOpt?:{
    openIcon:'arrow'
  }
  children: (item: T) => {
    accTit: React.ReactNode;
    content: React.ReactNode | null;
  };
}

export const Accordion = <T,>({
  data,
  mode = "multiple", 
  className,
  accOpt,
  children,
}: AccordionProps<T>) => {
  const [singleActive, setSingleActive] = useState<number | null>(null);

  const handleChange = useCallback((index: number) => {
    if (mode === "single") {
      setSingleActive(index === singleActive ? null : index); 
    }
  }, [singleActive, mode]);

  return (
    <StyleWrap className={`accordion-wrap ${className ? className :''} ${accOpt?.openIcon ==='arrow' ? 'acc-arrow': ''}`}>
      {
        data.length > 0 
        ? (
          <ul>
            {
              data.map((accItem, accIdx) => {
                const { accTit, content } = children(accItem);
                return (
                  <MemoAccordionItem
                    key={accIdx}
                    itemIndex={accIdx}
                    singleOpen={mode === "single" ? singleActive === accIdx : false}
                    singleChange={mode === "single" ? handleChange : undefined}
                    accTit={accTit}
                    content={content}
                  />
                );
              })
            }
          </ul>
        )
        : <div className="acc-empty">목록이 없습니다.</div>
      }
    </StyleWrap>
  );
};

interface AccordionItemPropsType {
  accTit: React.ReactNode;
  content: React.ReactNode | null;
  itemIndex: number;
  singleOpen: boolean; // single 전용
  singleChange?: (index: number) => void; // single 전용 - 활성 idx
}

const AccordionItem = ({
  accTit,
  content,
  itemIndex,
  singleOpen,
  singleChange,
}: AccordionItemPropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { // single 하나만 open을 위해
    setIsOpen(singleOpen);
  }, [singleOpen]);

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev);
    if (singleChange) {
      singleChange(itemIndex);
    }
  }, [itemIndex, singleChange]);

  return (
    <li className={`acc-item ${isOpen? 'open':''}`}>
      <div className="acc-head">
        {
          content
          ? ( 
            <button 
              type="button" 
              className="acc-btn"
              onClick={handleClick}
            >
              {accTit}
              <span className="blind">{isOpen ? '닫기': '열기'}</span>
            </button>
          )
          : (
            <span className="acc-tit">{accTit}</span>
          )
        }
        
      </div>
      {
        content && (
          <div className={`acc-content ${isOpen ? "open" : ""}`}>
            {content}
          </div>
        )
      }
      
    </li>
  );
};

const MemoAccordionItem = memo(AccordionItem, (prevProps, nextProps) => {
  return(
    prevProps.singleOpen === nextProps.singleOpen &&
    prevProps.itemIndex === nextProps.itemIndex 
  )
});

const StyleWrap = styled.div`
  .acc-item{
    position:relative;
  }
  .acc-content {
    display: none;
    &.open {
      display: block;
    }
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