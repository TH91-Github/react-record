import { useRecoilCallback, useRecoilValue } from 'recoil';
import { toastState } from 'recoilStore/componentsAtoms';
import { ToastItem } from 'types/recoil';

export const useToast = () => {
  const addToast = useRecoilCallback(
    ({ set }) =>
      (
        message: string = 'success!',
        type?: 'base' | 'success' | 'error',
        timer: number = 2000
      ) => {
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
          setTimeout(() => {
            set(toastState, (current) => ({
              ...current,
              toasts: current.toasts.map((t) =>
                t.id === newToast.id ? { ...t, visible: false } : t
              ),
            }));
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
  return { addToast, removeToast, clearToasts };
};

// 🔹 recoil 구독 부모 리렌더링 방지(생성, 애니메이션, 삭제 시)
export const useToastList = () => {
  const { toasts } = useRecoilValue(toastState);
  return toasts;
};
