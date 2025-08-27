// 🔹user 회원가입, 로그인, 조회 계정 관련
import { arrayUnion, collection, doc, getDoc, serverTimestamp, updateDoc, writeBatch } from 'firebase/firestore';
import { UserDataType, UserDeleteType } from 'types/auth';
import { fireDB } from '../../firebase';

const users ='users';

// 🔹 user 신규가입
export const userPushDataDoc = async(userData:UserDataType) => {
  try {
    const batch = writeBatch(fireDB);

    // userLists 저장
    const userCollection = collection(fireDB, "users", "userData", "userLists");
    const newUserDoc = doc(userCollection, userData.uid);
    batch.set(newUserDoc, userData);

    // 이메일 저장
    const emailDoc = doc(fireDB, "users", "userData", "emails", userData.email);
    batch.set(emailDoc, {
      createdAt: serverTimestamp(),
    });

    // 간편 ID 있는 경우
    if(userData.simpleID){
      const idDoc = doc(fireDB, "users", "userData", "simpleIDs", userData.simpleID);
      batch.set(idDoc, {
        email:userData.email,
        createdAt: serverTimestamp(),
      });
    }

    // 승인대기 목록 추가
    const stateDoc = doc(fireDB, "users", "userStateCheck");
    batch.set(stateDoc, {
      disapproval: arrayUnion({ ...userData }),
    }, { merge: true });

    await batch.commit();
    // console.log('Firestore 저장 완료 ✅');
  } catch (error) {
    // console.error('Firestore 저장 실패 ❌', error);
    throw error;
  }
}

// 🔹 user 삭제
export const userDeleteDataBatch = async (userData: UserDeleteType) => {
  const batch = writeBatch(fireDB);

  // 유저 리스트 문서 삭제 (userLists)
  const userListDoc = doc(fireDB, "users", "userData", "userLists", userData.id);
  batch.delete(userListDoc);

  // 이메일 문서 삭제
  const emailDoc = doc(fireDB, "users", "userData", "emails", userData.email);
  batch.delete(emailDoc);

  // 간편 ID 문서 삭제
  if(userData.simpleID){
    const idDoc = doc(fireDB, "users", "userData", "simpleIDs", userData.simpleID);
    batch.delete(idDoc);
  }

  // 승인 대기 리스트에서 제거
  const stateDoc = doc(fireDB, "users", "userStateCheck");
  const stateSnap = await getDoc(stateDoc);
  if (stateSnap.exists()) {
    const stateData = stateSnap.data();
    const disapprovalList = stateData.disapproval || [];

    const updatedDisapprovalList = disapprovalList.filter(
      (item: UserDataType) => item.uid !== userData.uid
    );

    await updateDoc(stateDoc, {
      disapproval: updatedDisapprovalList,
    });
  }
  // 일괄 커밋
  await batch.commit();
};

// 🔹 User > 하위 컬렉션 > 필드 내 일치하는 값 조회 : 체크 문서 네임 / 하위 컬렉션
export const getUserColDoc = async(colName:string, checkDoc:string) :Promise<null | UserDataType>=> {
  // 빈 값 처리
  if (!checkDoc?.trim() || !colName?.trim()) return null;
  const docRef = doc(fireDB, users, 'userData', colName, checkDoc);
  const snap = await getDoc(docRef);
  if(snap.exists()){
    return snap.data() as UserDataType;
  }else{
    return null
  }
};



