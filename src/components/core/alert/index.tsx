"use client";

import React from "react";

import { Check, Danger, Info, Warning } from "@components/icons";

import type { AlertProps } from "./alert.type";

import { Text } from "../typography";

const icon = {
  s: <Check width="16" />,
  p: <Info width="16" />,
  w: <Warning width="16" />,
  d: <Danger width="16" />,
  b: <Danger width="16" />,
} satisfies Record<string, React.ReactNode>;

export const Alert = ({
  color = "d",
  message,
  title,
}: AlertProps) => {
  return (
    <div className={`al- Sf-2 C${color}`} role="alert">
      <span className="al-I">{icon[color]}</span>
      <Text
        transform="capitalize"
        className="al-H"
        size="5"
        color={color}
        low
        weight="5"
      >
        {title}
      </Text>
      <Text size="4" weight="4" color={color} low>
        {message}
      </Text>
    </div>
  );
};
