import { useState } from "react";

import { ThemeContext } from "./ThemeContext";
import { ThemeVariant } from "./Themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeVariant>(ThemeVariant.Dark);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === ThemeVariant.Light ? ThemeVariant.Dark : ThemeVariant.Light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
