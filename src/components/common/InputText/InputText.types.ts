import { ReactElement } from "react";

export type InputTextProps = React.InputHTMLAttributes<HTMLInputElement> & {
  append?: ReactElement;
  preppend?: ReactElement;
};
