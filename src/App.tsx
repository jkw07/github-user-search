import { ThemeProvider } from './components/ThemeProvider'

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