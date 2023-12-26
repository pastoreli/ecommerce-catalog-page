import { ReactElement } from "react";

export type SelectItems = {
  label: string;
  value: any;
  selected?: boolean;
}

export type SelectProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  label?: string;
  items?: SelectItems[];
  onSelectItem?: (value: any) => void;
};
