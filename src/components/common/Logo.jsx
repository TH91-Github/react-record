import { colors } from "assets/style/Variable";
import { NavLink } from "react-router-dom";
import styled from "styled-components"


export const Logo = () => {
  return (
    <StyleWrap className="logo">
      <h1 className="blind">Blog - T.H</h1>
      <NavLink to="/">
        <div className="logo-wrap" aria-hidden="true">
          {
            <span className="logo-cube">
              {
                new Array(9).fill('_').map((_,idx) => <span key={idx} className={'cube-'+idx}></span>)
              }
            </span>
          }
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
      box-shadow: rgba(127, 127, 127, 0.9) 0.5px 0.5px 1px;
      transition: all .3s;
      animation-duration: 7s;
      animation-iteration-count: infinite;
      animation-fill-mode: none;
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
`;