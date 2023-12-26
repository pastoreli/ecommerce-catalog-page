import { createContext, useContext, useState } from 'react';

// Components
import { Toast } from '../../components';

// Types
import {
  ToastContextType,
  ToastProviderType,
  ShowToastProps,
} from './useToast.types';
import { toastTypes } from '../../components/common/Toast/Toast.types';

// Styles
import './useToast.styles.css';

export const ToastContext = createContext<ToastContextType>({});

export const ToastProvider = ({
  children,
  ...props
}: React.PropsWithChildren<ToastProviderType>) => {
  const [showToast, setShowToast] = useState(false);
  const [toastData, setToastData] = useState<ShowToastProps>({
    text: '',
    type: toastTypes.SUCCESS,
  });

  const handleShowToast = (data: ShowToastProps) => {
    setToastData(data);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const context: ToastContextType = {
    showToast: handleShowToast,
  };

  return (
    <ToastContext.Provider value={context} {...props}>
      <div
        className={`toast-container ${
          showToast ? 'toast-container--show' : ''
        } fixed w-[50rem] max-w-full left-0 right-0 m-auto z-50`}
      >
        <Toast text={toastData.text} type={toastData.type} />
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
