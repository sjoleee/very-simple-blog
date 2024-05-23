"use client";

import { PropsWithChildren, createContext, useState } from "react";

import changeGiscusTheme from "@/utils/changeGiscusTheme";

export type Theme = "light" | "dark";

interface State {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<State | null>(null);

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChangeTheme = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    changeGiscusTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleChangeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
