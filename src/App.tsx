import React from "react";
import Main from "./components/Main";
import { ThemeProvider } from "./contexts/ThemeContext";
import ChangeTheme from "./components/ChangeTheme";


const App = () => {
  return(
    <ThemeProvider>
      <ChangeTheme/>
      <Main />
  </ThemeProvider>
  )
}
export default App