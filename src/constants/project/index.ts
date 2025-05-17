import type { ProjectType } from "./project.type";

import { carRental } from "./car-rental";
import { cinema } from "./cinema";
import { dashboard } from "./dashboard";
import { domlav } from "./domlav";
import { food } from "./food";
import { gamer } from "./gamer";
import { huna } from "./huna-book";
import { linkdin } from "./linkdin";
import { openHand } from "./open-hand";
import { pillar } from "./pillar";
import { pillarDashboard } from "./pillar-dashaboard";
import { uiLego } from "./ui-lego";

export const PROJECTS: ProjectType[] = [
  pillar,
  openHand,
  pillarDashboard,
  huna,
  dashboard,
  cinema,
  linkdin,
  carRental,
  uiLego,
  gamer,
  food,
  domlav,
];
