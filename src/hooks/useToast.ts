import { useRecoilState, useRecoilCallback } from 'recoil';
import { ToastItem, toastState } from 'recoil/atoms';

export const useToast = () => {
  const [{ toasts }] = useRecoilState(toastState);

  const addToast = useRecoilCallback(
    ({ set }) => 
    (message: string = '복사 완료!', type: ToastItem['type'] = 'success') => {
      set(toastState, (prev) => {
        const newToast: ToastItem = {
          id: prev.nextId,
          visible: true,
          message,
          type,
        };

        const newState = {
          toasts: [...prev.toasts, newToast],
          nextId: prev.nextId + 1,
        };

        // 2초 후 숨기기
        setTimeout(() => {
          set(toastState, (current) => ({
            ...current,
            toasts: current.toasts.map((t) =>
              t.id === newToast.id ? { ...t, visible: false } : t
            ),
          }));

          // 0.5초 후 제거
          setTimeout(() => {
            set(toastState, (current) => ({
              ...current,
              toasts: current.toasts.filter((t) => t.id !== newToast.id),
            }));
          }, 500);
        }, 2000);

        return newState;
      });
    },
    []
  );

  const removeToast = useRecoilCallback(
    ({ set }) => (id: number) => {
      set(toastState, (prev) => ({
        ...prev,
        toasts: prev.toasts.filter((t) => t.id !== id),
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