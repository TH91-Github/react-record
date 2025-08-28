import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { stateHeaderHeight } from "recoilStore/atoms";
import styled from "styled-components"

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
  const headerHeight = useRecoilValue(stateHeaderHeight);
  return (
    <StyleWrap 
      $position={$position}
      $width={$sideWidth}
      $headerHeight={ ($sideHeight ?? headerHeight) ?? 0}
      className="side-layout"
    >
      <aside> 
        {children}
      </aside>
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
`;