import { useRecoilState, useRecoilCallback } from 'recoil';
import { toastState } from 'recoil/componentsAtoms';
import { ToastItem } from 'types/recoil';

export const useToast = () => {
  const [{ toasts }] = useRecoilState(toastState);

  const addToast = useRecoilCallback(
    ({ set }) => 
    (message: string = 'success!', type?: 'base' |'success' | 'error', timer:number = 2000) => {
      set(toastState, (prev) => {
        const newToast: ToastItem = {
          id: prev.nextId,
          visible: true,
          message,
          type: type || 'base',
        };

        const newState = {
          toasts: [...prev.toasts, newToast],
          nextId: prev.nextId + 1,
        };

        // 숨김
        setTimeout(() => {
          set(toastState, (current) => ({
            ...current,
            toasts: current.toasts.map((t) =>
              t.id === newToast.id ? { ...t, visible: false } : t
            ),
          }));
          // 삭제
          setTimeout(() => {
            set(toastState, (current) => ({
              ...current,
              toasts: current.toasts.filter((t) => t.id !== newToast.id),
            }));
          }, 500);
        }, timer);

        return newState;
      });
    },
    []
  );

  const removeToast = useRecoilCallback(
    ({ set }) => (id: number) => {
      set(toastState, (prev) => ({
        ...prev,
        toasts: prev.toasts.filter((r) => r.id !== id),
      }));
    },
    []
  );

  const clearToasts = useRecoilCallback(
    ({ set }) => () => {
      set(toastState, (prev) => ({
        ...prev,
        toasts: [],
      }));
    },
    []
  );

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  };
};