export interface AlertState {
  isActive: boolean;
  title?: string;
  desc?: string;
  autoCloseSecond?: number;
  onClose?: () => void;
};