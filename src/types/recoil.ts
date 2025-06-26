export interface AlertState {
  isActive: boolean;
  title?: string;
  desc?: string;
  autoCloseSecond?: number;
  onClose?: () => void;
};
export interface ToastItem {
  id: number;
  visible: boolean;
  message: string;
  type: 'base' | 'success' | 'error';
}

export interface ToastState {
  toasts: ToastItem[];
  nextId: number;
}