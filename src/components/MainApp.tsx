import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'
import {Header} from './Header'
import {UserSearch} from './UserSearch'

export const MainApp = () => {
    const {theme} = useContext(ThemeContext)
    return (
                <div className={`main ${theme}`}>
                    <Header/>
                    <UserSearch/>
                </div>
    )
}