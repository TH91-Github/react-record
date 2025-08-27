import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

// 🔹 내부 store - local data recoil
interface RecoilStorePropsType {
  children: ReactNode;
}

const RecoilStore = ({ children }:RecoilStorePropsType) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilStore;
