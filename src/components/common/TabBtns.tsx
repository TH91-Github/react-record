import { colors } from "assets/style/variables";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { cn } from "utils/common";

interface TabBtnsPropsType {
  tabType?:'basics'|'moving', // 기본 
  isAll? : boolean | 'ko' | 'en';
  data: string[];
  activeTab?:string;
  onBgColor?:string;
  changeEvent?: (val: string) => void;
}
export const TabBtns = ({
  tabType = 'basics',
  isAll = true,
  data,
  activeTab,
  onBgColor,
  changeEvent
}:TabBtnsPropsType) => {
  const tabBtnWrap = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(isAll ? -1 : 0);
  const defaultVal = isAll === 'en' ? 'All' : '전체';
  const [movingStyle, setMovingStyle] = useState(
    tabType === 'moving' 
      ? { left: 0, width: 0, height: 0 } 
      : { left: 5, width: 16, height: 16 }
  );

   const updateMovingStyle = (targetEl?: HTMLElement) => {
    if (tabType !== 'moving' || !tabBtnWrap.current) return;
    let targetBtn: Element | null = null;
    if (targetEl) {
      targetBtn = targetEl;
    } else {
      // 초기화 또는 상태 변경에서 호출된 경우
      const allButtons = tabBtnWrap.current.querySelectorAll('.tab button');
      // isActive가 -1이면 첫 번째 버튼(전체)
      let targetIndex = isActive;
      if (isAll) {
        targetIndex = isActive === -1 ? 0 : isActive + 1;
      }
      targetBtn = allButtons[targetIndex] || null;
    }

    if (targetBtn && tabBtnWrap.current) {
      const { left, width, height } = targetBtn.getBoundingClientRect();
      const parentLeft = tabBtnWrap.current.getBoundingClientRect().left;
      setMovingStyle({
        left: left - parentLeft,
        width: Math.round(width),
        height: Math.round(height),
      });
    }
  };

  const handleTabClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, val:string, idx:number) =>{
    if (tabType === 'moving') {
      updateMovingStyle(e.currentTarget);
    }
    setIsActive(idx)
    changeEvent && changeEvent(val)
  }

  useEffect(() => { // 초기 선택 값 전달
    if (!activeTab && isAll && changeEvent) {
      setIsActive(-1);
      changeEvent(defaultVal);
    }
  }, []);

  useEffect(() => { // 초기 선택 Tab 
    if(activeTab){
      const activeNum = data.indexOf(activeTab)
      activeNum > 0 && setIsActive(activeNum)
    }
  },[activeTab, data])

  useEffect(() => {
    if (tabType === 'moving' && tabBtnWrap.current) {
      // requestAnimationFrame을 사용하여 렌더링 완료 후 실행
      const updateStyle = () => {
        requestAnimationFrame(() => {
          updateMovingStyle();
        });
      };
      
      updateStyle();
    }
  }, [tabType, isActive, data, isAll]);
  return (
    <StyleWrap 
      ref={tabBtnWrap}
      className={cn('tab-btn-wrap', tabType)}
      $left={movingStyle.left}
      $width={movingStyle.width}
      $height={movingStyle.height}
      $onBgColor={onBgColor || colors.mSlateBlue}
    >
      <ul>
        {isAll && (
          <li className={cn('tab', isActive === -1 && 'active')}>
            <button type="button" onClick={(e) => handleTabClick(e, defaultVal, -1)}>
              <span>{defaultVal}</span>
            </button>
          </li>
        )}
        {data.map((item, idx) => (
          <li key={idx} className={cn('tab', isActive === idx && 'active')}>
            <button
              type="button"
              onClick={(e) => handleTabClick(e, item, idx)}>
                <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </StyleWrap>
  )
}
interface StyleWrapType {
  $left?:number,
  $width?:number,
  $height?:number,
  $activeColor?:string,
  $onTextColor?:string, // active text
  $onBgColor:string; // active bg
}

const StyleWrap = styled.div<StyleWrapType>`
  position:relative;
  & > ul {
    display:flex;
    gap:5px;
  }
  .tab {
    & > button {
      min-width:40px;
      height:40px;
      padding:5px 10px;
      border:1px solid transparent;
      border-radius: 5px;
    }
  }
  &.basics{
    .tab {
      & > button {
        min-width:40px;
        height:40px;
        padding:5px 10px;
        border:1px solid transparent;
        border-radius: 5px;
        transition: border-color var(--transition), background-color var(--transition), color var(--transition);
      }
      &.active {
        & > button {
          background: ${({$onBgColor}) => $onBgColor};
          color: #fff;
        }
      }
    }
  }
  &.moving {
    &:before {
      position:absolute;
      top:50%;
      left:0;
      min-width:40px;
      min-height:20px;
      width:${({$width}) => $width}px;
      height:${({$height}) => $height}px;
      border-radius:4px;
      background: ${({$onBgColor}) => $onBgColor};
      transition: transform var(--transition);
      transform:translate(${({$left}) => $left}px, -50%);
      box-shadow: rgba(127,127,127, 0.1) 0.7px 2px 2px;
      content:'';
    }
    .tab {
      & > button {
        position:relative;
        z-index:2;
      }
      &.active {
        & > button {
          transition: color var(--transition);
          color: #fff;
        }
      }
    }
  }
`;