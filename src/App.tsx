import { ThemeProvider} from './components/ThemeContext'
import { MainApp } from './components/MainApp'

export const App = () => {
  return (
    <>
      <ThemeProvider>
      <MainApp/>
      </ThemeProvider>
    </>
  )
}

