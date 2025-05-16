import type { ReactElement } from "react";

export type ContactInfoProps = {
  id: string;
  icon: ReactElement;
  info: string;
  href?: string;
};

export type ContactItemProps = {} & Omit<ContactInfoProps, "id">;
