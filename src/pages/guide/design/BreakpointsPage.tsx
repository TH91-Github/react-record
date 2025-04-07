import { bgOpacity, bgShadow, colors, textColor } from "assets/style/variables";
import { breakpointsData } from "components/pages/guide/data/designData";
import { TitlePoint } from "components/ui/TitlePoint";
import styled from "styled-components";
import { copyClipboard } from "utils/common";
import ImgArrow from 'assets/images/svg/arrow.svg';


export const BreakpointsPage = () => {

  const handleClickCopy = async (e:string) => {
    const copySuccess = await copyClipboard(e);
    // 👇 popup 컴포넌트 완료 후 교체
    copySuccess 
      ? console.log('성공') 
      : console.log('실패') 
  };

  return (
    <StyleWrap>
      <div className="content-heading">
        <TitlePoint 
          $display="block"
          titleTag="h4"
          titleText={'Breakpoint System'}
          pointer="underline"
          $fontSize={28}
        />
        <ul className="bullet-lists">
          <li className="desc circle">디바이스 환경에 따라 일관된 레이아웃을 제공하기 위해 정의</li>
          <li className="desc circle">파일 경로 : /src/assets/style/variables.ts</li>
        </ul>
      </div>
      <div className="section-wrap">
        {
          breakpointsData.map((item, idx) =>(
            <div className="section-item" key={idx}>
              <TitlePoint 
                $display="block"
                titleTag="h5"
                titleText={item.title}
                pointer="circle"
                $fontSize={20}
              />
              <p className="desc">사용 코드 : {item.id}.<span className="color">key</span></p>
              <ul className="breakpoint-lists">
                {
                  item.lists.map((dataItem, dataIdx) => (
                    <li key={dataIdx}>
                      <div className="breakpoint-item">
                        <div className="breakpoint-view">
                          {item.id === 'breakpoints' ? (
                            <ArrowText $arrowBg={ImgArrow} className="size">
                              <span>{dataItem.code}</span>
                            </ArrowText>
                          ) : ( 
                            <>
                              {(dataItem.media && dataItem.media.min) && (
                                <ArrowText $arrowBg={ImgArrow}className="min">
                                  <span>{dataItem.media.min}</span>
                                </ArrowText>
                              )}
                              {(dataItem.media && dataItem.media.max) && (
                                <ArrowText $arrowBg={ImgArrow}className="max">
                                  <span>{dataItem.media.max}</span>
                                </ArrowText>
                              )}
                            </>
                          )}
                        </div>
                        <div className="breakpoint-info">
                          <button className="btn-token" onClick={() => handleClickCopy(`${item.id}.${dataItem.title}`)}>
                            <span className="tit">{dataItem.title}</span>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .breakpoint-lists {
    display: flex;
    flex-wrap:wrap;
    gap:20px;
    margin-top:20px;
  }
  .breakpoint-item{
    overflow:hidden;
    position:relative;
    width:150px;
    border-radius:5px;
    box-shadow:${bgShadow.base};
    .breakpoint-view{
      position:relative;
      height:70px;
      border-bottom:1px solid ${colors.lineColor};
      &::before {
        position:absolute;
        top:50%;
        left:50%;
        width:100%;
        height:2px;
        border-top:2px dotted ${colors.lineColor};
        transform: translate(-50%, -50%);
        content:'';
      }
    }
    .breakpoint-info {
      .btn-token{
        width:100%;
        padding:10px 10px;
        border: 2px solid #fff;
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        background:#fff;
        text-align:left;
        transition: border-color var(--transition);
      }
    }
    &:hover{ 
      .btn-token {
        border-color: ${colors.lineBlack};
      }
    }
  }
`;

type ArrowTextPropsType = {
  $arrowBg?: string;
}
const ArrowText = styled.span<ArrowTextPropsType>`
  display:inline-block;
  position:absolute;
  top:50%;
  z-index:1;
  transform: translateY(-50%);
  & > span {
    display:inline-block;
    padding:2px;
    background:${bgOpacity.white};
    font-size:14px;
  }
  &.size {
    left:50%;
    width:100%;
    transform: translate(-50%, -50%);
    & > span {
      display:inline-block;
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
    &::before, &::after{
      position:absolute;
      top:50%;
      left:-8px;
      width:24px;
      height:24px;
      background: url(${({$arrowBg})=> $arrowBg});
      background-size: contain;
      transform: translateY(calc(-50% - 1px));
      content:'';
    }
    &::after{
      left:auto;
      right:-8px;
      transform: translateY(calc(-50% - 1px)) rotate(180deg);
    }
  }
  &.min, &.max {
    &::before {
      position:absolute;
      top:-70%;
      left:50%;
      transform: translateX(-50%);
      font-size:12px;
      color:${textColor.subText};
    }
  }
  &.min {
    left:0;
    padding-left:5px;
    border-left:2px solid ${colors.mSlateBlue};
    border-radius:5px;
    &::before {
      content:'mix'
    }
  }
  &.max {
    right:0px;
    padding-right:5px;
    border-right:2px solid ${colors.mSlateBlue};
    border-radius:5px;
    &::before {
      content:'max'
    }
  }

`;