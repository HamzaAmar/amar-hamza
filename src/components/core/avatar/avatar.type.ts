type Size = 'sm' | 'md' | 'lg' | 'xl' | 'fluid';

export interface AvatarProps {
  size?: Size;
  image: string;
  title: string;
}
