// ✅ TestPage.jsx -> Parent Component

import { useSetRecoilState } from "recoil";
import { stateAlert } from "recoil/atoms";

export const TestPage = () => {
  const setAlert = useSetRecoilState(stateAlert);
  const handleClick = () => {
    setAlert({
      isActive: true,
      title: '테스트',
      desc: '테스트 팝업입니다.',
      autoCloseSecond: 3000,
    });
  };
  return(
    <div className="test-wrap">

      <button 
        className="btn"
        onClick={handleClick}
      >
        <span>테스트 알럿 팝업</span>
      </button>
   
    </div>
  )
}