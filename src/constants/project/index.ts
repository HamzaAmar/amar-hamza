import { domlav } from './domlav';
import { dashboard } from './dashboard';
import { gamer } from './gamer';
import { cinema } from './cinema';
import type { ProjectType } from './project.type';
import { linkdin } from './linkdin';
import { uiLego } from './uiLego';
import { pillar } from './pillar';
import { carRental } from './car-rental';
import { huna } from './huna-book';
import { openHand } from './open-hand';
import { food } from './food';

export const PROJECTS: ProjectType[] = [
  pillar,
  huna,
  openHand,
  dashboard,
  cinema,
  linkdin,
  carRental,
  uiLego,
  gamer,
  food,
  domlav,
];
