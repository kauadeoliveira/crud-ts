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
import List from "./components/List"
import { modalSlice } from "./store/slices/modalSlice"
import { tasksSlice } from "./store/slices/tasksSlice"
import Header from "./components/Header"
function App() {
  const { tasks } = useAppSelector(store => store.tasks)
  const { filtredTasks } = useAppSelector(store => store.tasks)

  return(
    <div>
      <ThemeProvider theme={dark}>
        <GlobalStyle />
        <Header />
        <NewTaskButton />
        <Modal />
        <List>
          {filtredTasks.length > 0 ? (
            filtredTasks.map(task => {
              return(
                <Task
                date={task.date}
                id={task.id}
                priority={task.priority}
                title={task.title}
                completed={task.completed}
                key={task.id}
              />
              )
            })
          ) : (
            tasks.map(task => {
              if(!task.completed){
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
            })
          )}
          {/* {tasks.map(task => {
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
          })} */}
        </List>
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