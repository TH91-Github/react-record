import { firebaseAuth, fireProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export const LogIn = () => {
 
  const handleGoogle = async() => {
    try {
      const result = await signInWithPopup(firebaseAuth, fireProvider);
      const googleUser = result.user;
      console.log("Google 계정 회원가입 및 로그인 성공", googleUser);
    } catch (error) {
      console.error(error);
    }
  }

  return( 
    <div>
      <h2>구글 계정 연동 - 회원가입 & 로그인</h2>
      <button className="btn" onClick={handleGoogle}>
        Google 로그인하기
      </button>
    </div>
  )
}