type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'fluid';
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
