import { NavLink } from "react-router-dom";
import { routerData } from "../../data/routerData";

import { SvgLogin, SvgSetting, SvgLogOut } from "../../assets/icon/SvgPath";
import "../../assets/style/common.scss";
import "../../assets/components/Header.scss";

function Header({direction, chnageNav}) {
  const navDirection = () => {
    chnageNav(!direction);
  }
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" className="header-title">
            <span class="tit">TH-91</span>
          </NavLink>
        </div>
        <div className="header-nav">
          <ul>
            {
              routerData.map((link) => (
                <li key={link.title}>
                  <NavLink to={link.path} className="header-link">
                    {link.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        
        <div className="header-fix">
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
                  <div class="members-menu">
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
      </div>
    </div>
  )
}

export default Header;