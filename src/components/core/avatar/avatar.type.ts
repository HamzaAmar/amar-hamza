type Size = 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
type Color =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning';

export interface AvatarProps {
  size?: Size;
  image?: string;
  title: string;
  className?: string;
  color?: Color;
}
