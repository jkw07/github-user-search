import { createContext } from "react";
import { ThemeVariant } from "./Themes";

type ThemeContextTypes = {
  theme: ThemeVariant;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextTypes>({
  theme: ThemeVariant.Dark,
  toggleTheme: () => {},
});
