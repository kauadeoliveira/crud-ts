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
import Accordion from "./components/Accordion"
import List from "./components/TaskList"
import { modalSlice } from "./store/slices/modalSlice"
import { tasksSlice } from "./store/slices/tasksSlice"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
function App() {
  const { tasks } = useAppSelector(store => store.tasks)
  const { filtredTasks } = useAppSelector(store => store.tasks)
  const { focused } = useAppSelector(store => store.searchBar)
  return(
    <div>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Header />
        <NewTaskButton />
        <Modal />
        <TaskList />
        <Accordion title="Complete">
          {tasks.map(task => {
            if(task.completed){
              return (
                <Task 
                date={task.date}
                id={task.id}
                priority={task.priority}
                title={task.title}
                completed={task.completed}
                key={task.id}
              />
              )
            }
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  )
}

export default App