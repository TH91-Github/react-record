import { UserMenu } from "components/features/auth/UserMenu";
import { useRecoilValue } from "recoil";
import { stateDevMode } from "recoilStore/atoms";
import styled from "styled-components";


export const UtilNav = () => {
  const devMode = useRecoilValue(stateDevMode);

  if(!devMode) return null
  return (
    <StyleWrap className="util-nav">
      <div className="util-inner">
        <div className="util-item">
          <UserMenu />
        </div>
      </div>
    </StyleWrap>
  )
}

const StyleWrap = styled.div`
  .util-inner{
    display:flex;
  }
`;