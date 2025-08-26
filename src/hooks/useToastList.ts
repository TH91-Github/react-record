// 🔹 useToastList.ts
import { useRecoilValue } from 'recoil';
import { toastState } from 'recoilStore/componentsAtoms';

export const useToastList = () => {
  const { toasts } = useRecoilValue(toastState);
  return toasts;
};
