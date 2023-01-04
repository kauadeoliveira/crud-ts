import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import { CheckTask, DeleteTaskButton, TaskContent, TaskDetails, TaskPriority, TaskWrapper } from "./style";
import 'animate.css'
import doneIcon from "../../assets/images/done.png"
import { abbreviateDate } from "../../utils/abbreviateDate";
import { formatDate } from "../../utils/formatDate";
import trashIcon from "../../assets/images/trash.png"

interface TaskComponent extends TaskProps {
    classAnimate?: string;
}
export default function Task({ title, date, id, priority, completed, classAnimate }: TaskComponent) {
    const { completeTask } = tasksSlice.actions
    const { deleteTask } = tasksSlice.actions
    const dispatch = useDispatch()
    const handleComplete = () => dispatch(completeTask({id, completed}))
    const handleDelete = () => dispatch(deleteTask(id))


    useEffect(() => {
        if(date)
        console.log(formatDate(date.toString()))
    }, [])
    return(
            <TaskWrapper className={classAnimate}>
                <TaskPriority priority={priority}/>
                <CheckTask check={completed} icon={doneIcon} onClick={handleComplete}/>
                <TaskDetails check={completed}>
                    <span className="task-title">{title}</span>
                    <span className="task-date">{formatDate(date ? date.toString() : '')}</span>
                </TaskDetails>
                <DeleteTaskButton icon={trashIcon} onClick={handleDelete}/>
            </TaskWrapper>
    )
}