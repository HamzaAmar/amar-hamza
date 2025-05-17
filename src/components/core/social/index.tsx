import SOCIALS from "@constants/socialMenu";
import React from "react";

import { IconButton } from "@components/core";
import { c } from "@utils/classnames";

import type SocialProps from "./social.type";

export const Social = ({
  className,
  direction = "horizontal",
  size = "5",
}: SocialProps) => {
  return (
    <ul
      {...c("so- u_column", {
        "so-vertical": direction === "vertical",
        [className!]: className,
      })}
    >
      {SOCIALS.map(({ id, icon, link, name }) => (
        <li key={id}>
          <IconButton
            as="a"
            href={link}
            icon={icon}
            size={size}
            target="_blank"
            rel="noreferrer noopener"
            title={`Visit My ${name} account`}
          />
        </li>
      ))}
    </ul>
  );
};
