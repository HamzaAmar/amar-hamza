export interface ItemProps {
  name: string;
  path: string;
  pathname: string;
  mobile?: boolean;
  handleClose?: () => void;
}
export interface MenuProps {
  id: number;
  name: string;
  path: string;
}
