import { ThemeProvider } from "styled-components"
import { useAppSelector } from "./hooks/useAppSelector"
import { GlobalStyle, Wrapper } from "./assets/styles/global"

import dark from "./assets/theme/dark"
import Modal from "./components/Modal"
import Header from "./components/Header"
import IncompleteTaskList from "./components/IncompleteTaskList"
import CompleteTaskList from "./components/CompleteTaskList"
import NavBar from "./components/NavBar"
import FloatingNewTaskButton from "./components/FloatingNewTaskButton"
import light from "./assets/theme/light"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { tasksSlice } from "./store/slices/tasksSlice"
import { store } from "./store"


function App() {
  const { mode } = useAppSelector(store => store.theme);

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