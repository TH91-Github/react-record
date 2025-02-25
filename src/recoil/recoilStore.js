import { RecoilRoot } from 'recoil';

const RecoilStore = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilStore;
