import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { stateHeaderHeight } from "recoil/atoms";
import styled from "styled-components"

// 사이드 레이아웃
interface SideLayoutPropsType {
  position?: 'relative' | 'absolute' | 'sticky' | 'fixed',
  sideWidth?: number,
  sideHeight?:number,
  children: ReactNode,
}

export const SideLayout = ({
  position = 'relative',
  sideWidth = 300,  // pc 최대 가로 사이즈
  sideHeight, // height 지정 없는 경우 header 제외 높이
  children 
}:SideLayoutPropsType) => {
  const headerHeight = useRecoilValue(stateHeaderHeight);
  return (
    <StyleWrap 
      $position={position}
      $width={sideWidth}
      $headerHeight={ (sideHeight ?? headerHeight) ?? 0}
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
  width:100%;
  max-width:${({$width}) => $width}px;
  height:calc(100svh - ${props => (props.$headerHeight)}px);
  & > aside {
    width:100%;
    height:100%;
  }
`;