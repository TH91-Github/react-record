import { bgTranslucence, breakpoints, colors } from "assets/style/variables";
import { GUIDE_LIST } from "routes/pages/guide/GuideRouter";
import styled from "styled-components";

// Guide 간단 소개 페이지
export const GuideAbout = () => {
  console.log(GUIDE_LIST)

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
          <div className="">
            ul
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
    padding:80px;
  }
  .design-box{
    position:absolute;
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
    border: 1px solid red;
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
    }
    &:nth-child(2){ 
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:nth-child(3){ 
      transform: translate(-50%, calc(-50% - 50px)) rotate(45deg);
    }
  }

.diamond {
   position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom right, #9b6aff, #5b44ff);
  border-radius: 10px;
  opacity: 0.5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.layer1 {
  transform: rotateX(45deg);
}


`;