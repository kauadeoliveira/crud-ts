import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import { CheckTask, TaskContent, TaskDetails, TaskPriority, TaskWrapper } from "./style";
import 'animate.css'
import doneIcon from "../../assets/images/done.png"
import { abbreviateDate } from "../../utils/abbreviateDate";

interface TaskComponent extends TaskProps {
    classAnimate?: string;
}
export default function Task({ title, date, id, priority, completed, classAnimate }: TaskComponent) {
    const { completeTask } = tasksSlice.actions
    const dispatch = useDispatch()
    const handleClick = () => dispatch(completeTask({id, completed}))


    useEffect(() => {
        const date = new Date(Date.now())
        console.log('atual: ', abbreviateDate(date.toString()))
    }, [])
    return(
        <TaskWrapper className={classAnimate}>
            <TaskPriority priority={priority}/>
            <TaskContent>
                <TaskDetails check={completed}>
                    <span className="task-title">{title}</span>
                    <span className="task-date">{date}</span>
                </TaskDetails>
                <CheckTask check={completed} icon={doneIcon} onClick={handleClick}/>
            </TaskContent>
        </TaskWrapper>
    )
}