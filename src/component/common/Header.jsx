import { NavLink } from "react-router-dom";
import { routerData } from "../../data/routerData";

import "../../assets/components/Header.scss";


function Header({direction, chnageNav}) {
  const navDirection = () => {
    chnageNav(!direction);
  }
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" className="header-title">TH-91</NavLink>
        </div>
        <div className="header-nav">
          <ul>
            {
              routerData.map((link) => (
                <li key={link.title}>
                  <NavLink to={link.path} >
                    {link.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="header-fix">
          <ul>
            <li className="nav-direction">
              <button type="button" onClick={navDirection}>가로/세로 변경</button>
            </li>
            <li className="notifications">

            </li>
            <li className="members">
              <div className="members-box">
                <button type="button" className="login">로그인</button>
                <button type="button" className="user">
                  <span className="user-ame">이름 입력할 곳</span>
                </button>
                {/* 유저 로그인 후 메뉴 */}
                {
                  false && 
                  <div class="members-menu">
                    <ul>
                      <li>
                        <button type="button">프로필 수정</button>
                      </li>
                      <li>
                        <button type="button">알림</button>
                      </li>
                      <li>
                        <button type="button">로그아웃</button>
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