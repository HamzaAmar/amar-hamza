import { domlav } from './domlav';
import { dashboard } from './dashboard';
import { gamer } from './gamer';
import { cinema } from './cinema';
import type { ProjectType } from './project.type';
import { linkdin } from './linkdin';
import { uiLego } from './uiLego';
import { pillar } from './pillar';
import { carRental } from './car-rental';

export const PROJECTS: ProjectType[] = [
  pillar,
  dashboard,
  uiLego,
  linkdin,
  carRental,
  gamer,
  cinema,
  domlav,
];
