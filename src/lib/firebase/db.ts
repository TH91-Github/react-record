// 🔹 DB - 조회, 추가, 수정, 삭제, 비교
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase';

const defaultDB = process.env.REACT_APP_DB || '';
const users = process.env.REACT_APP_USER || '';

// email 저장
export const saveEmail = async(email:string):Promise<void> => {
  if(!fireDB) return 
  const docRef = doc(fireDB, users, 'userData', 'emails', email);
  await setDoc(docRef, {
    createdAt: serverTimestamp(),
  });
};

// 필드 내 일치하는 값 조회
export const checkEmailDuplicate = async(email:string):Promise<boolean> => {
  if(!fireDB) return false 
  const docRef = doc(fireDB, users, 'userData', 'emails', email);
  const snap = await getDoc(docRef);
  return snap.exists();
};