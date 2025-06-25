
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from "../../firebase";
import { LogIn } from './LogIn';

export const Tistory = () => {
  const [loginUser, setLoginUser] = useState<string | null>(null);

  useEffect(()=>{
    // 사용자의 로그인 상태 변경 감시
    const unAuth = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log(user)
        console.log('로그인 상태')
        setLoginUser(user.email);
      } else {
        console.log('로그아웃 상태')
        setLoginUser(null);
      }
    })
    return () => unAuth();
  },[])

  // 로그아웃
  const handleSignOut = () => {
    signOut(firebaseAuth);
  }
  return (
    <div className="Tistory">
      {
        loginUser 
          ? <button onClick={handleSignOut}>{loginUser}님 로그아웃</button> 
          : <LogIn />
      }
    </div>
  );
};
