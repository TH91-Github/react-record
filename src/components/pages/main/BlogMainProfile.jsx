import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import { SvgPen, SvgPlan, SvgProject, SvgSkills, Svglink } from "assets/styles/SvgPath";
import { colors, media } from "assets/styles/Variable";

const pointColor = colors.green;
const profileData = ["ABOUT", "SKILLS", "PROJECT","PLAN"];

function BlogMainProfile(){
  return (
    <BlogWrap id="b-profile">
      <ProfileInner className="profile__inner">
        <ProfileTextBox className="profile__text__box">
          <SC.TitleBox className="profile__text">
            <SC.Title className="tit ani-ini">
              <CartegoryTit>Profile</CartegoryTit> -
              소개 
            </SC.Title>
            <SC.SubTxt className="txt ani-ini">
              소개, 프로젝트, 관련 스킬 등 
            </SC.SubTxt>
          </SC.TitleBox>
          <SC.BtnArticle $justifyConent="center" className="profile__link">
            <S.BlogLinkBtn $hoverBg={colors.green} className="link-btn ani-ini">
              <span>
                <S.BlogLinkIcon><Svglink></Svglink></S.BlogLinkIcon>
                Profile
              </span> 
            </S.BlogLinkBtn>
          </SC.BtnArticle>
        </ProfileTextBox>
        <ProfileVisual className="profile__info">
          <SquareList className="profile__list">
            {
              profileData.map((item, idx) => {
                return <SquareLi className="profile__list-li ani-ini" key={idx}>
                <ProfileItem className="profile__list-item">
                  <ItemIcon>
                    {idx === 0 && <SvgPen $strokeColor={pointColor}/> }
                    {idx === 2 && <SvgProject $strokeColor={pointColor}/> }
                    {idx === 1 && <SvgSkills $strokeColor={pointColor}/> }
                    {idx === 3 && <SvgPlan $fillColor={pointColor}/> }
                  </ItemIcon>
                  <ItemTxt className="txt">{item}</ItemTxt>
                </ProfileItem>
              </SquareLi>
              })
            }
          </SquareList>
        </ProfileVisual>
      </ProfileInner>
      
    </BlogWrap>
  )
}

export default BlogMainProfile;

const BlogWrap = styled.div`
  position:relative;
  height:100vh;
  min-height:700px;
  &.on {
    .profile__text__box {
      .tit {
        ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
      }
      .txt {
        ${SC.animation(SC.fadeIn, 1, 'ease', .4)}
      }
      .link-btn {
        ${SC.animation(SC.fadeIn, 1, 'ease', .5)}
      }
    }
    .profile__list{
      &::after{
        display:block;
      }
    }
    .profile__list-li{
      &:nth-child(1) {
        ${SC.animation(SC.fadeIn, 1, 'ease', .3)}
      }
      &:nth-child(2) {
        ${SC.animation(SC.fadeIn, 1, 'ease', .4)}
      }
      &:nth-child(3) {
        ${SC.animation(SC.fadeIn, 1, 'ease', .5)}
      }
      &:nth-child(4) {
        ${SC.animation(SC.fadeIn, 1, 'ease', .6)}
      }
    }
  }
  ${media.mo}{
    height:auto;
    padding: 50px 0;
    min-height:auto;
  }
`;
const ProfileInner = styled(SC.InnerStyle)`
  display:flex;
  height:100%;
  ${media.mo}{
    flex-direction: column;
    & > div { 
      width:100%;
    }
  }
`;
const ProfileTextBox = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  width:40%;
`;
const CartegoryTit = styled.strong`
  color:${pointColor};
`;

const ProfileVisual = styled.div`
  margin-top:30px;
  ${media.pc}{
    display:flex;
    justify-content:center;
    align-items:center;
    width:60%;
    margin-top:0;
  }
`;

const SquareList = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  position:relative;
  ${media.pc}{
    width: 55%;
    height: 0;
    padding-bottom: 55%;
    transform: rotate(45deg);
    animation: updownAni 3s linear infinite;
    @keyframes updownAni {
      from, to { transform:translateY(0) rotate(45deg); }
      50% {  transform:translateY(5px) rotate(45deg); }
    }
    &::after {
      display:none;
      position:absolute;
      z-index:-1;
      top:-3px;
      left:-3px;
      width:50%;
      padding-bottom:50%;
      background:${pointColor};
      content:"";
      opacity:0;
      animation: scaleAni 2.3s linear 1s infinite;
      @keyframes scaleAni {
        0%{
          transform: scale(0.1);
          opacity:1;
        }
        100%{
          transform: scale(1.2);
          opacity:0;
        }
      }
    }
  }
  ${media.mo}{
    flex-diection:column;
  }
`;
const SquareLi = styled.div`
  position:relative;
  z-index:2;
  background: ${colors.baseWhite};
  box-shadow:1px 2px 5px rgba(0, 0, 0, 0.1);
  &:first-child{ 
    background:${pointColor};
    .profile__list-item {
      svg path {
        stroke:#fff;
      }
      .txt {
        color:${colors.baseWhite};
      }
    }
    &::before {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: linear-gradient(to right,  rgba(255,255,255,.3) 0%,rgba(255,255,255,0) 2%);
      content:"";
      pointer-events : none;
    }
    &::after {
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: linear-gradient(to left,  rgba(0,0,0,.3) 0%,rgba(0,0,0,0) 2%);
      content:"";
      pointer-events : none;
    }
  }
  ${media.pc}{
    width:calc(50% - 5px);
    height:0;
    padding-bottom:calc(50% - 5px);
  }
  ${media.mo}{
    width:100%;
    max-width:450px;
    margin:0 auto;
    padding:10px;
    text-align:center;
    &:first-child{ 
      &::before {
        display:none;
      }
      &::after {
        display:none;
      }
    }
    
  }
`;

const ProfileItem = styled.div`
  display:inline-block;
  text-align:center;
  ${media.pc}{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
const ItemIcon = styled(SC.Icon)`
  display:block;
  width:40px;
  height:40px;
  margin:0 auto;
  ${media.mo}{
    width:25px;
    height:25px;
  }
`;

const ItemTxt = styled.span`
  display:inline-block;
  margin-top:10px;
  font-size:14px;
  color:${colors.textColor};
  ${media.mo}{
    margin-top:5px;
  }
`;