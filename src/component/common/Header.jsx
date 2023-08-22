import { NavLink } from "react-router-dom";
import { routerData } from "../../data/routerData";

import "../../assets/components/Header.scss";

function Header() {
  // 임시 
  // const list = [];
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <NavLink to="/" className="header-title">TH-91</NavLink>
        </div>
        <div>
          <div className="header-nav">
            <ul>
              {
                routerData.map((link) => (
                  <li>
                    <NavLink to={link.path} key={link.title}>
                      {link.title}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <div class="header-fix">
        <ul>
          <li class="notifications">

          </li>
          <li class="members">
            <div className="members-box">
              <button type="button" onClick="" className="login">로그인</button>
              <button type="button" onClick="" className="user">
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
  )
}

export default Header;