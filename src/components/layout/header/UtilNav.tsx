import { colors, media } from "assets/style/variables";
import { UserMenu } from "components/features/auth/UserMenu";
import { useRecoilValue } from "recoil";
import { stateDevMode, stateIsMobile } from "recoilStore/atoms";
import styled from "styled-components";
import { cn } from "utils/common";

interface UtilNavPropsType {
  isMoOpen: boolean,
  moreClickEvnet: () => void,
}

export const UtilNav = ({isMoOpen, moreClickEvnet}:UtilNavPropsType) => {
  const isMobile = useRecoilValue(stateIsMobile);
  const devMode = useRecoilValue(stateDevMode);

  const handleMoreClick = () => {
    moreClickEvnet();
  }

  if(!devMode) return null
  return (
    <StyleWrap className="util-nav">
      <div className="util-inner">
        <div className="util-item">
          <UserMenu />
        </div>
        {isMobile && (
          <div className="util-item">
            <button 
              type="button" 
              className={cn('btn-more',isMoOpen && 'open')}
              onClick={handleMoreClick}>
              <span className="blind">
                {isMoOpen ? '닫기' : '더보기'}
              </span>
              {new Array(3).fill('-').map((item, idx)=> (
                <span key={item+idx} className={`more-icon circle-${idx+1}`}></span>
              ))}
            </button>
          </div>
        )}
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .util-inner{
    display:flex;
  }
  .btn-more {
    display:block;
    overflow:hidden;
    position:relative;
    width:25px;
    height:25px;
    &.open{
      .circle-1 {
        top:50%;
        width:3px;
        height:100%;
        border-radius:3px;
        transform: translate(-50%,-50%) rotate(-45deg);
      }
      .circle-2 {
        transform: translate(200px, -50%);
        opacity:0;
      }
      .circle-3 {
        top:50%;
        width:3px;
        height:100%;
        border-radius:3px;
        transform: translate(-50%,-50%) rotate(-135deg);
      }
    }
  }
  .more-icon {
    display:block;
    position:absolute;
    left:50%;
    width:5px;
    height:5px;
    border-radius:50%;
    background:${colors.black};
    transition: all .3s;
    &.circle-1 {
      top:0;
      transform: translateX(-50%);
    }
    &.circle-2 {
      top:50%;
      transform: translate(-50%, -50%);
    }
    &.circle-3 {
      bottom:0;
      transform: translateX(-50%);
    }
  }
  ${media.mo}{
    .util-inner{
      align-items:center;
      gap:10px;
    }
  }
`;