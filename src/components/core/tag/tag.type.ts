type Size = 'sm' | 'md' | 'lg';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';

export interface TagProps {
  title: string;
  size?: Size;
  color?: Color;
}
