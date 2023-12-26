export enum toastTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export type ToastProps = {
  type: toastTypes;
  text: string;
}
