import { bgColor, colors, media, transitionStyle } from "assets/style/variables";
import { IconArrowRight } from "assets/svg/icons";
import useToggle from "hooks/useToggle";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stateHeaderHeight } from "recoilStore/atoms";
import styled from "styled-components";
import { cn } from "utils/common";

// 사이드 레이아웃
interface SideLayoutPropsType {
  $position?: 'relative' | 'absolute' | 'sticky' | 'fixed',
  $sideWidth?: number,
  $sideHeight?:number,
  children: ReactNode,
}

export const SideLayout = ({
  $position = 'fixed',
  $sideWidth = 300,  // pc 최대 가로 사이즈
  $sideHeight, // height 지정 없는 경우 header 제외 높이
  children 
}:SideLayoutPropsType) => {
  const location = useLocation();
  const headerHeight = useRecoilValue(stateHeaderHeight);
  const [isMoOpen, setIsMoOpen] = useToggle(false);

  useEffect(()=>{
    if(isMoOpen){
      setIsMoOpen();
    }
  },[location])

  const handleMoOpen = () => {
    setIsMoOpen();
  }
  return (
    <StyleWrap 
      $position={$position}
      $width={$sideWidth}
      $headerHeight={ ($sideHeight ?? headerHeight) ?? 0}
      className={cn('side-layout', isMoOpen && 'open')}
    >
      <aside> 
        {children}
      </aside>
      <button 
        type="button"
        className="btn-mo"
        onClick={handleMoOpen}
      >
        {
          isMoOpen
            ? <span className="icon-close"></span>
            : <span className="icon"><IconArrowRight /></span>
        }
        <span className="blind">{isMoOpen ? '닫기': '열기'}</span>
      </button>
    </StyleWrap>
  )
}

interface StyleWrapPropsType { 
  $position: string,
  $width: number,
  $headerHeight: number,
}

const StyleWrap = styled.div<StyleWrapPropsType>`
position:${({$position}) => $position};
top:${({$headerHeight}) => $headerHeight}px;
z-index:10;
width:100%;
max-width:${({$width}) => $width}px;
height: calc(100svh -  ${({$headerHeight}) => $headerHeight}px);
border-right:1px solid ${colors.lineColor};
background:${bgColor.sideWite};
${transitionStyle(['transform'])}
.btn-mo{
  display:none;
}
${media.mo}{
  position:fixed;
  top:${({$headerHeight}) => $headerHeight}px;
  left:0;
  max-width:100%; 
  height: calc(100svh - ${({$headerHeight}) => $headerHeight}px);
  transform:translateX(calc((100% - 5px) * -1));
  &.open{
    transform:translateX(0);
    .btn-mo{
      top:15px;
      left:auto;
      right:15px;
      width:30px;
      height:30px;
      border-radius:0;
      border:none;
      transform:translate(0);
      &::before{
        display:none;
      }
      .icon-close{
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        opacity:1;
        ${transitionStyle(['opacity'])}
      }
    }
  }
  .btn-mo{
    display:block;
    position:absolute;
    top:50%;
    right:-20px;
    width:40px;
    height:40px;
    border:1px solid ${colors.lineColor};
    border-radius:50%;
    background:${bgColor.sideWite};
    transform: translateY(-50%);
    &::before{
      position:absolute;
      top:-2px;
      left:0px;
      width:50%;
      height:calc(100% + 4px);
      background:${bgColor.sideWite};
      content:'';
    }
    .icon-close{
      opacity:0;
    }
    .icon{
      position:absolute;
      top:50%;
      left:calc(50% + 5px);
      width:15px;
      height:15px;
      transform: translate(-50%, -50%);
    }
  }
}
`;