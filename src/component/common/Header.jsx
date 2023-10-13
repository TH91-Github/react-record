import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { routerData } from "data/routerData";

import { SvgLogin, SvgSetting, SvgLogOut } from "component/styled/common/SvgPath";
import "assets/scss/common.scss";
import "assets/scss/components/Header.scss";

function Header({location, headFixed, fixChange, chnageNav}) {
  const [chkOnOff,setchkOnOff] = useState(false);
  const [scrolly, setScrolly] = useState(0);
   
  const menuOpen = () => {
    if(chkOnOff){
      mobileScrollOff(false);
    }else {
      mobileScrollOff(true);
    }
    setchkOnOff(!chkOnOff)
    fixChange();
  }
  const navDirection = () => {
    chnageNav();
  }
  useEffect(() => {
    setchkOnOff(false);
    return () => {
      mobileScrollOff(false);
    }
  },[location])
  
  function mobileScrollOff(chkOnOff){ // mo 스크롤 막기
    const tBody = document.body;
    if(chkOnOff){
      setScrolly(window.pageYOffset);
      tBody.style.position = 'fixed';
      tBody.style.width = '100%';
    }else{
      tBody.removeAttribute('style');
      window.scrollTo({top:scrolly, behavior: 'instant'});
      setTimeout(() => { // 팝업 닫은 후 이동이 안되었을 경우
        if(window.pageYOffset < 10){
          window.scrollTo({top:scrolly, behavior: 'instant'});
        }
      },50)
    }
  };

  return (
    <div className={'header ' + (headFixed || chkOnOff ?'fixed':'')}>
      <div className="header__inner">
        <div className="header-logo">
          <NavLink to="/" className="header-title">
            <span className="tit">TH-91</span>
          </NavLink>
        </div>
        <div className={'header__nav ' + (chkOnOff ?'open':'')}>
          <div className="header__nav-menu">
            <ul>
              {
                routerData.map((link, idx) => (
                  // 0 은 index 페이지이
                  idx > 0 && 
                  <li key={link.title}>
                    <NavLink to={link.path} className="header-link">
                      {link.title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div> 
          <button type="button" className="header__nav-btn" onClick={menuOpen}>
            <span>{!chkOnOff ? 'Open' :'Off'}</span>
          </button>
        </div>
        
        { // 임시 숨김 구조 자리 안정화 후 설정
          false && <div className="header__fix">
          <ul className="fix-lists">
            <li className="nav-direction">
              <button type="button" className="nav-type" onClick={navDirection} title="메뉴 위치 변경">
                <span className="txt">header Type 가로/세로 변경</span>  
              </button>
            </li>
            <li className="notifications">
            </li>
            <li className="members">
              <div className="members-box">
                <button type="button" className="login">
                  <SvgLogin />
                  <span className="blind">회원 로그인</span>
                </button>
                { // 로그인 후 보여지는 button
                  false && <button type="button" className="user">
                    <span className="user-ame">이름 입력할 곳</span>
                  </button>
                }
                {/* 유저 로그인 후 메뉴 */}
                {
                  false && 
                  <div className="members-menu">
                    <ul>
                      <li>
                        <button type="button">
                          <SvgSetting />
                          프로필 수정
                        </button>
                      </li>
                      <li>
                        <button type="button">알림</button>
                      </li>
                      <li>
                        <button type="button">
                          <SvgLogOut />
                          로그아웃
                        </button>
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Header;