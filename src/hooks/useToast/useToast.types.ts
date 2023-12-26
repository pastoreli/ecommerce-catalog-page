// Types
import { toastTypes } from '../../components/common/Toast/Toast.types';

export type ShowToastProps = {
  text: string;
  type: toastTypes;
}

export type ToastContextType = {
  showToast?: (data: ShowToastProps) => void;
}

export type ToastProviderType = {
    value?: ToastContextType;
};
