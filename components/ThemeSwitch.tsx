"use client";

import { useTheme } from "next-themes";
import { useShowClientUI } from "@/hooks";

export const ThemeSwitch = () => {
  const showClientUI = useShowClientUI();
  const { theme, setTheme } = useTheme();

  if (!showClientUI) {
    return null;
  }

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="system">Auto</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};
