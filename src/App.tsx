import { ThemeProvider } from "styled-components"
import { GlobalStyle, Wrapper } from "./assets/styles/global"

import dark from "./assets/theme/dark"
import Modal from "./components/Modal"
import Header from "./components/Header"
import IncompleteTaskList from "./components/IncompleteTaskList"
import CompleteTaskList from "./components/CompleteTaskList"
import NavBar from "./components/NavBar"
import FloatingNewTaskButton from "./components/FloatingNewTaskButton"
import ThemeSwitchButton from "./components/ThemeSwitchButton"
import light from "./assets/theme/light"
import { useAppSelector } from "./hooks/useAppSelector"


function App() {
  const { mode } = useAppSelector(store => store.theme)
  return(
      <ThemeProvider theme={mode === 'dark' ? dark : light}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <NavBar />
          <FloatingNewTaskButton />
          <Modal />
          <main>
            <section>
              <IncompleteTaskList />
            </section>
            <section>
              <CompleteTaskList title="Complete" />
            </section>
          </main>
        </Wrapper>
      </ThemeProvider>
  )
}

export default App