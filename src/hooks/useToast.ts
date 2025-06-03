// hooks/useToast.ts
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { stateToastID } from 'recoil/atoms';

export type ToastItem = {
  id: number;
  visible: boolean;
};

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const toastRef = useRef<ToastItem[]>([]);
  const [id, setId] = useRecoilState(stateToastID);

  const addToast = () => {
    const nextId = id;
    setId(id + 1);

    const newToast: ToastItem = { id: nextId, visible: true };
    toastRef.current = [...toastRef.current, newToast];
    setToasts(toastRef.current);

    console.log(toastRef.current)
    setTimeout(() => {
      toastRef.current = toastRef.current.map((t) =>
        t.id === nextId ? { ...t, visible: false } : t
      );
      console.log(toastRef.current)
      setToasts([...toastRef.current]);
      // setTimeout(() => {
      //   toastRef.current = toastRef.current.filter((t) => t.id !== nextId);
      //   setToasts([...toastRef.current]);
      // }, 500);
    }, 2000);
  };

  return {
    toasts,
    addToast,
  };
}