import { ThemeContext } from './ThemeContext'
import {Header} from './Header'
import {UserSearch} from './UserSearch'

export const MainApp = () => {
    return (
        <ThemeContext.Consumer>
            {({theme}) => (
                <div className={`main ${theme}`}>
                    <Header/>
                    <UserSearch/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}