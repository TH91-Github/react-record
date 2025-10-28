export interface AlertStateType {
  isActive: boolean;
  title?: string;
  desc?: string;
  autoCloseSecond?: number;
  onClose?: () => void;
};
export interface ToastItemType {
  id: number;
  visible: boolean;
  message: string;
  type: 'base' | 'success' | 'error';
}

export interface ToastStateType {
  toasts: ToastItemType[];
  nextId: number;
}