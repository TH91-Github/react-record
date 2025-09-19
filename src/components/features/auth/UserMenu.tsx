import { IconLogout, IconUser } from "assets/svg/icons";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "reduxStore/store";
import styled from "styled-components"
import { signOut } from "firebase/auth";
import { Modal } from "components/common/Modal";
import { media } from "assets/style/variables";

// 로그인 on/off
export const UserMenu = () => {
  const navigate = useNavigate();
  const {isLogin, user} = useSelector((state : RootState) => state.storeUserLogin);
  const [isMenu, setIsMenu] = useState(false);
  const [logOutPop, setLogOutPop] = useState(false);

  const handleMenuClick = () => {
    setIsMenu(prev => !prev);
    // navigate('/'); my page 이동 예정
  }

  const handlePopupClick = async() =>{ 
    setLogOutPop(prev => !prev)
  }

  const handleLogOut = async() => {
    await signOut(auth);
    setLogOutPop(false);
  }
  const handlePopupClose = () => {
    setLogOutPop(false)
  }

  return ( 
    <StyleWrap>
      {!isLogin
        ?
        <div className="login">
          <NavLink to={'/member'} title="로그인하기" className="btn-login">
            <IconUser />
          </NavLink>
        </div>
        : 
        <div className="user">
          <p className="tit">{user?.nickName}님</p>
          {/* <div className="user-menu">
            <button 
              type="button"
              className="btn-menu"
              title="내 정보"
              onClick={handleMenuClick}
            >
              <span className="tit">{user?.nickName}님</span>
            </button>
          </div> */}
          <button 
            type="button"
            title="로그아웃"
            className="btn-logout"
            onClick={handlePopupClick}
          >
            <IconLogout />
          </button>
        </div>
      }
      { logOutPop && (
          <Modal
            // autoCloseSecond={4000}
            onClose={handlePopupClose}
          >
            <ModelInner>
              <p className="tit">
                로그아웃 할까요?
              </p>
              <div className="btn-article">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleLogOut}
                >
                  <span>확인</span>
                </button>
                <button 
                  type="button" 
                  className="btn btn-gray"
                  onClick={handlePopupClose}
                >
                  <span>취소</span>
                </button>
              </div>
            </ModelInner>
          </Modal>
        )
      }
      
    </StyleWrap>
  )
}
const StyleWrap = styled.div`
  .login{
    display:flex;
    align-items:center;
    .btn-login{
      display:inline-block;
      width:20px;
      height:20px;
      & > svg { 
        width:100%;
        height:100%;
      }
    }
  }
  .user{
    display:flex;
    align-items:center;
    gap:5px;
    .tit{
      line-height:1;
    }
  }
  .btn-logout{
    position:relative;
    width:20px;
    height:20px;
    & > svg { 
      width:100%;
      height:100%;
    }
  }
  ${media.mo}{

  }
`;

const ModelInner = styled.div`
  .btn-article{
    display:flex;
    justify-content: center;
    align-items:center;
    gap:10px;
    margin-top:20px;
  }
`;