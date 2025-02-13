import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Header = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <header>
            <div className="logo">
                <i className="fa-brands fa-github fa-2xl"></i>
                <p>devfinder.</p>
            </div>
            <div className="theme-buttons">
            <button onClick={toggleTheme}><i className="fa-solid fa-lightbulb fa-xl"></i></button>
            </div>
        </header>
    )
}