import { bgTranslucence, breakpoints, colors } from "assets/style/variables";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";
import { GuideMenuIcon } from "./GuideMenuIcon";
import { useNavigate } from "react-router-dom";

// Guide 간단 소개 페이지
export const GuideAbout = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path:string, depthPath:string | undefined) => {
    if(depthPath){
      let checkDepth = depthPath.indexOf(':id') > 0 ? '': depthPath;
      navigate(`guide/${path}/${checkDepth}`);
    }
  }
  return (
    <StyleWrap className="about-wrap">
      <div className="about-inner">
        <div className="about-header">
          <span className="line-box">
            <h3 className="title"><span className="color">Guide</span> System</h3>
            <p className="desc">
              총 <span className="color">{GUIDE_LIST.length}</span>개 카테고리로 <br />
              가이드를 확인할 수 있어요!
            </p>
          </span>
        </div>
        <div className="about-content">
          <div className="design-box" aria-hidden="true">
            <span className="square-box">
              <span className="square-item"></span>
              <span className="square-item"></span>
              <span className="square-item"></span>
            </span>
          </div>
          <div className="link-box">
            <ul className='link-lists'>
              {
                GUIDE_LIST.map((item,idx) => (
                  <li key={idx} className={`link-item ${item.id}`}>
                    <button 
                      className={`link-btn`}
                      onClick={() => handleLinkClick(item.path, item?.children?.[0]?.path)}
                      disabled={!(item?.children)}
                    >
                      <GuideMenuIcon id={item.id} />
                      <span className="tit">{item.title}</span>
                      {
                        !(item?.children) && <div className="disabled">
                          <span>준비 중...</span>
                        </div>
                      }
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .about-inner {
    max-width:${breakpoints.tablet}px;
    margin:0 auto;
    padding:80px 0 30px;
    text-align:center;
  }
  .about-header{
    .line-box{
      display:inline-block;
      position:relative;
      padding:20px 30px;
      &::before, &::after {
        position: absolute;
        width: 10px;
        height:10px;
        border-radius:50%;
        border:1px solid ${colors.mSlateBlue};
        content: '';
      }
      &::before{
        top: -5px;
        left: -5px;
        animation: circleLineAni 4.1s infinite;
      }
      &::after {
        bottom:-5px;
        right:-5px;
        animation: circleLineAni 2.7s infinite;
      }
      @keyframes circleLineAni {
        0%{
          transform: scale(0);
          opacity:1;
        }
        100%{
          transform: scale(2);
          opacity:0;
        }
      }
    }
    .title{ 
      font-size:48px;
      &::before, &::after {
        position:absolute;
        top:-20px;
        left:0;
        width:1px;
        height:calc(100% + 40px);
        border-left:1px dashed ${colors.lineColor};
        content:'';
      }
      &::after{ 
        top:0;
        left:-20px;
        width:calc(100% + 40px);
        height:1px;
        border-left:none;
        border-top:1px dashed ${colors.lineColor};
      }
    }
    .desc{ 
      margin-top:30px;
      font-size:18px;
      line-height:24px;
      &::before, &::after {
        position:absolute;
        bottom:-20px;
        right:0;
        width:1px;
        height:calc(100% + 40px);
        border-left:1px dashed ${colors.lineColor};
        content:'';
      }
      &::after{ 
        bottom:0;
        right:-20px;
        width:calc(100% + 40px);
        height:1px;
        border-left:none;
        border-top:1px dashed ${colors.lineColor};
      }
    }
  }
  .about-content {
    display:flex;
    justify-content:center;
    position:relative;
    padding:80px;
  }
  .design-box{
    position:relative;
    z-index:2;
    width:250px;
    height:250px;
    border-radius:5px;
    ${bgTranslucence.baseLight};
    .box-item{
      display:block;
      position:absolute;
      width: 100px;
      height: 100px;
      background: linear-gradient(to bottom right, #9fa8ff, #6c73ff);
      transform: rotate(45deg) scaleX(1.1) scaleY(0.6);
      border-radius: 6px;
      opacity: 0.5;
      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 10px;
        left: 0;
        opacity: 0.7;
      }
      &:nth-child(3) {
        top: 20px;
        left: 0;
        opacity: 1;
      }
    }
      
  }
  .square-box{
    position:absolute;
    top:50%;
    left:50%;
    width:200px;
    height:200px;
    transform: translate(-50%, -50%) rotateX(-60deg);
  }
  .square-item{ 
    display:block;
    position:absolute;
    top:50%;
    left:50%;
    width:100px;
    height:100px;
    border-radius:5px;
    background: linear-gradient(to bottom right, #9fa8ff, #6a67e5);
    opacity:.9;
    &:nth-child(1){ 
      transform: translate(-50%, calc(-50% + 50px)) rotate(45deg);
      animation: squareAin-1 2s .5s ease-in-out both;
    }
    &:nth-child(2){ 
      transform: translate(-50%, -50%) rotate(45deg);
      animation: squareAin-2 2s .5s ease-in-out both;
    }
    &:nth-child(3){ 
      transform: translate(-50%, calc(-50% - 50px)) rotate(45deg);
      animation: squareAin-3 2s .5s ease-in-out both;
    }
  }
  @keyframes squareAin-1 {
    from { opacity:0; transform: translate(-50%, calc(-50%)) rotate(45deg); }
    to { opacity:1; transform: translate(-50%, calc(-50% + 50px)) rotate(45deg); }
  }
    @keyframes squareAin-2 {
    from { opacity:0; transform: translate(-50%, calc(-50%)) rotate(45deg); }
    to { opacity:1; transform: translate(-50%, calc(-50%)) rotate(45deg); }
  }
    @keyframes squareAin-3 {
    from { opacity:0; transform: translate(-50%, calc(-50%)) rotate(45deg); }
    to { opacity:1; transform: translate(-50%, calc(-50% - 50px)) rotate(45deg); }
  }
  .link-box {
    position:absolute;
    top:50%;
    left:50%;
    width:250px;
    height:250px;
    transform: translate(-50%, -50%);
  }
  .link-item{
    position:absolute;
    &.principles{
      top:-20px;
      right:calc(100% + 50px);
      .link-btn {
        &::before{
          top:50%;
          left:100%;
        }
        &::after{
          left:calc(100% + 48px);
          transform:translate(-50px, -50%);
          animation: left-1-Ani 5s 1s linear infinite both;
        }
      }
    }
    &.design{
      top:100px;
      right:calc(100% + 80px);
      .link-btn {
        &::before{
          top:50%;
          left:100%;
          width:78px;
        }
        &::after{
        left:calc(100% + 78px);
        animation: left-2-Ani 5s 1.3s linear infinite both;
        }
      }
    }
    &.ui {
      top:220px;
      right:calc(100% + 50px);
      .link-btn {
        &::before{
          top:10%;
          left:100%;
        }
        &::after{
          top:10%;
          left:calc(100% + 48px);
          animation: left-1-Ani 5s 1.7s linear infinite both;
        }
      }
    }
    &.components{
      top:-20px;
      left: calc(100% + 50px);
      .link-btn {
        &::before{
          top:50%;
          right:100%;
        }
        &::after{
          right:calc(100% + 48px);
          animation: right-1-Ani 5s 1.5s linear infinite both;
        }
      }
    }
    &.hooks {
      top:100px;
      left: calc(100% + 80px);
      .link-btn {
        &::before{
          top:50%;
          right:100%;
          width:80px;
        }
          &::after{
          right:calc(100% + 78px);
          animation: right-2-Ani 5s 1.6s linear infinite both;
        }
      }
    }
    &.utils{
      top:220px;
      left: calc(100% + 50px);
      .link-btn {
        &::before{
          top:10%;
          right:100%;
        }
        &::after{
          top:10%;
          right:calc(100% + 48px);
          animation: right-1-Ani 5s 1.2s linear infinite both;
        }
      }
    }
    &.preferences{
      top:calc(100% + 50px);
      left:50%;
      background:#fff;
      transform: translateX(-50%);
      .link-btn {
        &::before{
          top:auto;
          bottom:100%;
          width:1px;
          height:50px;
          border-top:0;
          border-right:1px dashed ${colors.lineColor};
        }
        &::after{
          top:auto;
          left:50%;
          margin-left:1px;
          bottom:calc(100% + 45px);
          animation: top-Ani 5s 1.4s linear infinite both;
        }
      }
    }
  }
  .link-btn{
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:5px;
    padding:10px;
    border:1px dashed ${colors.lineColor};
    border-radius:5px;
    background:#fff;
    transition: border-color var(--transition);
    &::before{
      position:absolute;
      z-index:-2;
      width:48px;
      border-top:1px dashed ${colors.lineColor};
      transition: border-color var(--transition);
      content:'';
    }
    &::after{
      position:absolute;
      z-index:-1;
      top:50%;
      width:5px;
      height:5px;
      border-radius:50%;
      background:#000;
      transform:translateY(-50%);
      transition: background-color var(--transition);
      content:'';
    }
    &:hover, &:focus {
      border-color:${colors.mSlateBlue};
      &::before{
        border-color:${colors.mSlateBlue};
      }
      &::after{
        background-color: ${colors.mSlateBlue};
      }
      .icon {
        color:${colors.mSlateBlue};
      }
      .tit {
        color:${colors.mSlateBlue};
      }
    }
    .icon{ 
      display:inline-block;
      width:30px;
      height:30px;
      transition: color var(--transition);
      color:${colors.navy};
    }
    .tit {
      font-size:14px;
      white-space: nowrap;
      transition: color var(--transition);
    }
  }
  .disabled {
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:5px;
    background:rgba(0,0,0,.7);
    text-align:center;
    font-size:14px;
    color:#fff;
  }
  @keyframes left-1-Ani {
    0%{ transform:translate(-60px, -50%);}
    20% {transform:translate(-50px, -50%);}
    90% {transform:translate(1px, -50%);}
    100%{transform:translate(1px, -50%) scale(0);}
  }
  @keyframes left-2-Ani {
    0%{ transform:translate(-90px, -50%); }
    20% { transform:translate(-80px, -50%); }
    90% { transform:translate(1px, -50%);}
    100% { transform:translate(1px, -50%) scale(0);}
  }
  @keyframes right-1-Ani {
    0%{  transform:translate(60px, -50%);}
    20% { transform:translate(50px, -50%);}
    90% { transform:translate(-1px, -50%);}
    100% { transform:translate(-1px, -50%) scale(0);}
  }
  @keyframes right-2-Ani {
    0%{  transform:translate(90px, -50%); }
    20% {transform:translate(80px, -50%); }
    90% {transform:translate(-1px, -50%);}
    100% {transform:translate(-1px, -50%) scale(0);}
  }
  @keyframes top-Ani {
    0%{ transform:translate(-50%, 60px); }
    20% { transform:translate(-50%, 50px);}
    90% { transform:translate(-50%, -1px);}
    100% { transform:translate(-50%, -1px) scale(0);}
  }
`;