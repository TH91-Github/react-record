import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilStorePropsType {
  children: ReactNode;
}

const RecoilStore = ({ children }:RecoilStorePropsType) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilStore;
