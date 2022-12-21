import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/styles/global"
import dark from "./assets/theme/dark"

function App() {
  return(
    <div>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
