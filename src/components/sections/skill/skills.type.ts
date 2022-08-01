import type { ReactNode } from 'react';

export interface SkillsProps {
  slug: string;
  title: string;
  level: number;
  icon: ReactNode;
}

export type ItemSkillProps = Omit<SkillsProps, 'slug'>;
