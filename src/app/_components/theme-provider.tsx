"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "next-themes";
import React from "react";

const NextThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
