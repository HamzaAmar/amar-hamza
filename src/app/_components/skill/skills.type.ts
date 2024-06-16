import type { ReactNode } from 'react';

export interface SkillsProps {
  slug: string;
  title: string;
  level: number;
  icon: ReactNode;
  description: string;
}

export type ItemSkillProps = Omit<SkillsProps, 'slug'>;
