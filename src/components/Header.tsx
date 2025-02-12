import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <header>
            <div className="logo">
                {theme !== 'dark' && <i className="fa-brands fa-github fa-2xl"></i>}
                {theme !== 'light' && <i className="fa-brands fa-github fa-2xl" style={{color: '#ffffff'}}></i>}
                <p>devfinder.</p>
            </div>
            <div className="theme-buttons">
            {theme !== 'dark' && <button onClick={toggleTheme}><i className="fa-solid fa-lightbulb fa-xl"></i></button>}
            {theme !== 'light' && <button onClick={toggleTheme}><i className="fa-solid fa-lightbulb fa-xl" style={{color: '#ffffff'}}></i></button>}
            </div>
        </header>
    )
}