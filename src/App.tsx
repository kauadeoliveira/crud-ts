import { useEffect } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./assets/styles/global"
import dark from "./assets/theme/dark"
import Modal from "./components/Modal"
import NewTaskButton from "./components/NewTaskButton"
import Task from "./components/Task"
import { useAppSelector } from "./hooks/useAppSelector"
import 'animate.css'
import Accordion from "./components/CompleteTaskList"
import { modalSlice } from "./store/slices/modalSlice"
import { tasksSlice } from "./store/slices/tasksSlice"
import Header from "./components/Header"
import IncompleteTaskList from "./components/IncompleteTaskList"
import CompleteTaskList from "./components/CompleteTaskList"
import NavBar from "./components/NavBar"
function App() {
  const { tasks } = useAppSelector(store => store.tasks)
  const { filtredTasks } = useAppSelector(store => store.tasks)
  const { focused } = useAppSelector(store => store.searchBar)
  return(
    <div>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Header />
        <NavBar />
        <NewTaskButton />
        <Modal />
        <IncompleteTaskList />
        <CompleteTaskList title="Complete" />
      </ThemeProvider>
    </div>
  )
}

export default App