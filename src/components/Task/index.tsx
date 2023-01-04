import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import { CheckTask, TaskDetails, TaskPriority, TaskWrapper } from "./style";
import 'animate.css'

interface TaskComponent extends TaskProps {
    classAnimate?: string;
}
export default function Task({ title, date, id, priority, completed, classAnimate }: TaskComponent) {
    const { completeTask } = tasksSlice.actions
    const dispatch = useDispatch()
    const [check, setCheck] = useState<boolean>(false);
    const handleClick = () => dispatch(completeTask({id, completed}))

    store.subscribe(() => console.log(store.getState()))
    return(
        <TaskWrapper className={classAnimate}>
            <TaskPriority />
            <TaskDetails>
                <span className="task-title">{id}</span>
                <span className="task-date">1/1/2023</span>
            </TaskDetails>
            <CheckTask check={completed} onClick={handleClick}/>
        </TaskWrapper>
    )
}