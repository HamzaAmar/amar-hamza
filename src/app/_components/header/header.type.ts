export type ItemProps = {
  name: string;
  path: string;
  pathname: string;
  mobile?: boolean;
  handleClose?: () => void;
};
export type MenuProps = {
  id: number;
  name: string;
  path: string;
};
