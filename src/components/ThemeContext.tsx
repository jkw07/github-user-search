import { createContext} from "react";
import { ThemeVariant } from "./Themes";

/* type ThemeProviderProps = {
    children: ReactNode,
} */

type ThemeContextTypes = {
    theme: ThemeVariant,
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextTypes>({
    theme: ThemeVariant.Dark,
    toggleTheme: () => {}
});

/* export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeVariant>(ThemeVariant.Dark);

    const toggleTheme = () => {
        setTheme((prev) => prev === ThemeVariant.Light ? ThemeVariant.Dark : ThemeVariant.Light)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
} */