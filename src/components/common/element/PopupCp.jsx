import { Button } from "assets/styles/StyledCm";
import { media } from "assets/styles/Variable";
import { tColors } from "components/ux_th/styled/StyledTH";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components"

export default function ThPopup({ children, popupState, popupSet, ...props }){
  const [beforeY, setBeforeY] = useState(0);
  const popupClosed = () => { // 닫기
    mobileScrollOff(false);
    popupSet(false)
  }
  const mobileScrollOff = useCallback((chkOnOff)=>{ // 스크롤 막기
    const body = document.body;
    if(chkOnOff){
      setBeforeY(window.pageYOffset);
      body.style.overflow = 'hidden';
      body.style.height = '100%';
    }else{
      body.removeAttribute('style');
      window.scrollTo({top:beforeY, behavior: 'instant'});
    }
  },[beforeY])

  useEffect(()=>{ 
    popupState
    ? mobileScrollOff(true)
    : mobileScrollOff(false)
  },[popupState, mobileScrollOff])

  return (
    <PopupLayer className="popup">
      <div className="popup__inner">
        {children}
        <CloseBtn onClick={()=> popupClosed()}>
          <span>닫기</span>
        </CloseBtn>
      </div>
      <Dimmed onClick={()=>popupClosed()}/>
    </PopupLayer>
  )
}

const PopupLayer = styled.div`
  position:fixed;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  height:100%;
  .popup__inner{ 
    position:absolute;
    z-index:11;
    top:50%;
    left:50%;
    width:80%;
    min-width:300px;
    min-height:300px;
    padding:30px;
    border-radius:10px;
    background:${tColors.tWhite};
    transform: translate(-50%, -50%);
  }
`;

const CloseBtn = styled(Button)`
  position:absolute;
  top:15px;
  right:15px;
  width:25px;
  height:25px;
  &:hover, &:focus { 
    &>span{
      transform: rotate(-180deg);
      &::before,&::after{
        width:100%;
        height:100%;
        background:${tColors.tRed};
      }
    }
  }
  &>span{
    display:block;
    position:relative;
    width:100%;
    height:100%;
    text-indent:-9999px;
    transition: all .3s;
    &::before, &::after{
      position:absolute;
      top:50%;
      left:0;
      width:100%;
      height:2px;
      border-radius:50%;
      background: #242424;
      transition: all .3s;
      transform: translateY(-50%) rotate(45deg);
      content:'';
    }
    &::after{
      transform: translateY(-50%) rotate(-45deg) ;
    }
  }
  ${media.mo}{
    top:15px;
    right:15px;
    width:15px;
    height:15px;
  }
`;

const Dimmed = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.7);
  opacity:0;
  animation:PopupOn .8s both;
  @keyframes PopupOn {
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;