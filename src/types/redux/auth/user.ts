
export interface UserDataType { // 🔹 DB 유저 정보
  id: string; // 필드 id
  email: string; // 가입 email
  loginID: string; // 간편 ID
  nickName: string; // 이름 or 닉네임
  password: string; // 임의 비번 암호화 - 잠금 암호 걸때 사용
  permission:{
    blockTime: number; // 사용 제한 기간  timestamp
    state: boolean; // 승인/비승인
  };
  rank: 'basic' | 'admin'; // 회원등급
  theme: {
    color:string; // 색상 저장
    mode: 'dark' | 'light';
  };
  uid: string;
}

export interface UserStateCheckType { // 🔹 DB 비승인 정보 disapproval
  email: string;
  titme: string;
  uid: string;
}


export interface UserStoreType {
  isLoggedIn: boolean,
  user: null | UserDataType,
  loginTime: number,
}