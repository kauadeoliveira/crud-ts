import { ListContainer } from "./style";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { store } from "../../store";
import Task from "../Task";
import NotFoundScreen from "../NoResultFound";


export default function IncompleteTaskList() {
    const { tasks } = useAppSelector(store => store.tasks)
    const { filtredTasks } = useAppSelector(store => store.tasks)
    const { focused } = useAppSelector(store => store.searchBar)
    const { inputValue } = useAppSelector(store => store.searchBar)


    if(filtredTasks.length > 0){
        return(
            <ListContainer>
                {filtredTasks.map(task => {
                    return(
                        <Task 
                         key={task.id}
                         id={task.id}
                         title={task.title}
                         date={task.date}
                         priority={task.priority}
                         completed={task.completed}
                        />
                    )
                })}
            </ListContainer>
        )
    }
    else if(filtredTasks.length === 0 && inputValue !== ''){
        return(
            <NotFoundScreen />
        )
    }
    else{
        return(
            <ListContainer>
                {tasks.map(task => {
                    if(!task.completed){
                        return(
                            <Task 
                             key={task.id}
                             id={task.id}
                             title={task.title}
                             date={task.date}
                             priority={task.priority}
                             completed={task.completed}
                            />
                        )
                    }
                })}
            </ListContainer>
        )
    }
}