import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/styles/global"
import dark from "./assets/theme/dark"
import Modal from "./components/Modal"
import NewTaskButton from "./components/NewTaskButton"

function App() {
  return(
    <div>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <NewTaskButton />
      </ThemeProvider>
    </div>
  )
}

export default App
