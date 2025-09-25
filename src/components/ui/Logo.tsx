import { colors, media } from "assets/style/variables";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Logo = () => {
  return (
    <StyleWrap className="logo">
      <h1 className="blind">Blog - T.H</h1>
      <NavLink to="/">
        <div className="logo-wrap" aria-hidden="true">
          {<span className="logo-cube">
            {
              new Array(9).fill('_').map((_,idx) => <span key={idx} className={'cube-'+idx}></span>)
            }
          </span>}
          <div className="logo-title">
            <span className="name">
              <em>T</em>ae
            </span>
            <span className="name">
              <em>H</em>oon
            </span>
          </div>
        </div>
      </NavLink>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
.logo-wrap{
  display:flex;
  align-items: center;
  gap:5px;
}
.logo-cube{
  display:flex;
  flex-wrap:wrap;  
  position:relative;
  width:30px;
  height:30px;
  gap:1px;
  & > span{
    display:block;
    width:calc((100% - 2px) / 3);
    height:calc((100% - 2px) / 3);
    border-radius:2px;
    background:#fff;
    box-shadow: rgba(127, 127, 127, 0.4) 0.5px 0.5px 1px;
    transition: all .3s;
    animation-duration: 7s;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    &:hover { 
      background:${colors.yellow};  
    }
    &:nth-child(1){  
      animation-name: cube1;
      @keyframes cube1 {
        1.19%{background: ${colors.mSlateBlue};}
        2.38%, 100%{background:#fff;}
      }
    }
    &:nth-child(2){
      animation-name: cube2;
      @keyframes cube2 {
        2.38%, 4.76% {background:#fff;}
        3.57% {background: ${colors.mSlateBlue};}
        64.848%, 93.412%, 100% {transform:translateY(0)}
        71.99%, 86.27% {transform:translateY(calc(100% + 1px))}
      }
    }
    &:nth-child(3){
      animation-name: cube3;
      @keyframes cube3 {
        4.76%, 7.14%, 100% {background:#fff;}
        5.95% {background: ${colors.mSlateBlue};}
      }
    }
    &:nth-child(4){
      animation-name: cube4;
      @keyframes cube4 {
        7.14%, 9.52% {background:#fff;}
        8.33% {background: ${colors.mSlateBlue};}
        29.142%, 57.706%, 100%{transform:translateX(0)}
        36.284%, 50.564% {transform:translateX(calc(100% + 1px))}
      }
    }
    &:nth-child(5){
      animation-name: cube5;
      @keyframes cube5 {
        9.52%, 11.9%, 100% {background:#fff;}
        10.71% {background: ${colors.mSlateBlue};}
      }
    }
    &:nth-child(6){
      animation-name: cube6;
      @keyframes cube6 {
        11.9%, 14.28% {background:#fff;}
        13.09% {background: ${colors.mSlateBlue};}
        29.142%, 57.706%, 100%{transform:translateX(0)}
        36.284%, 50.564% {transform:translateX(calc((100% + 1px) * -1))}
      }
    }
    &:nth-child(7){
      animation-name: cube7;
      @keyframes cube7 {
        14.28%, 16.66% {background:#fff;}
        15.47% {background: ${colors.mSlateBlue};}
        29.142%, 57.706%, 100%{transform:translateX(0)}
        36.284%, 50.564% {transform:translateX(calc(100% + 1px))}
      }
    }
    &:nth-child(8){
      animation-name: cube8;
      @keyframes cube8 {
        16.66%, 19.04% {background:#fff;}
        17.85% {background: ${colors.mSlateBlue};}
        64.848%, 93.412%, 100% {transform:translateY(0)}
        71.99%, 86.27% {transform:translateY(calc((100% + 1px) * -1))}
      }
    }
    &:nth-child(9){
      animation-name: cube9;
      @keyframes cube9 {
        19.04%, 21.42% {background:#fff;}
        20.23% {background: ${colors.mSlateBlue};}
        29.142%, 57.706%, 100%{transform:translateX(0)}
        36.284%, 50.564% {transform:translateX(calc((100% + 1px) * -1))}
      }
    }
  }
}
.logo-title{
  text-align:left;
  .name {
    display:block;
    font-size:12px;
    color:#000;
    & > em { 
      font-weight:600;
      color:${colors.mSlateBlue};
    }
  }
}
${media.mo}{
  .logo-cube {
    & > span{
      &:hover { 
        background:#fff;  
      }
    }
  }
}
`;