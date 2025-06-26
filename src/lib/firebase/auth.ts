// 🔹user 회원가입, 로그인, 조회 계정 관련
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase';

const users = process.env.REACT_APP_USER || '';

// email 저장
export const saveEmail = async(email:string):Promise<void> => {
  const docRef = doc(fireDB, users, 'userData', 'emails', email);
  await setDoc(docRef, {
    createdAt: serverTimestamp(),
  });
};

// 필드 내 일치하는 값 조회
export const checkEmailDuplicate = async(email:string):Promise<boolean> => {
  console.log('asdasdasd54asd564as56d4as56d4a56sd456')
  console.log(email)
  const docRef = doc(fireDB, users, 'userData', 'emails', email);
  const snap = await getDoc(docRef);
  return snap.exists();
};