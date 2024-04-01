"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "swapr-ui";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster position="top-right" />
    </NextThemesProvider>
  );
}
