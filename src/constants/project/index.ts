import { domlav } from './domlav';
import { dashboard } from './dashboard';
import { gamer } from './gamer';
import { cinema } from './cinema';
import type { ProjectType } from './project.type';
import { linkdin } from './linkdin';
import { uiLego } from './uiLego';

export const PROJECTS: ProjectType[] = [
  dashboard,
  uiLego,
  linkdin,
  gamer,
  cinema,
  domlav,
];
