import { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import { CheckTask, TaskDetails, TaskPriority, TaskWrapper } from "./style";

export default function Task({ title, date, id, priority, completed }: TaskProps) {
    const { completeTask } = tasksSlice.actions
    const dispatch = useDispatch()
    const [check, setCheck] = useState<boolean>(false);
    const handleClick = () => dispatch(completeTask(id))

    store.subscribe(() => console.log(store.getState()))
    return(
        <TaskWrapper>
            <TaskPriority />
            <TaskDetails>
                <span className="task-title">{id}</span>
                <span className="task-date">1/1/2023</span>
            </TaskDetails>
            <CheckTask check={check} onClick={handleClick}/>
        </TaskWrapper>
    )
}