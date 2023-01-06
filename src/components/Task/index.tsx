import { useEffect, useRef, useState } from "react";
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

export default function Task({ title, date, id, priority, completed }: TaskProps) {
    const { completeTask } = tasksSlice.actions
    const { deleteTask } = tasksSlice.actions
    const [check, setCheck] = useState<boolean | undefined>(completed);
    const dispatch = useDispatch()
    const handleComplete = () => {
        setCheck(!check)
        setTimeout(() => dispatch(completeTask({id, completed})), 200)
    };

    const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>('fadeIn')
    const handleDelete = () => {
        setAnimation('fadeOut')
        setTimeout(() => dispatch(deleteTask(id)), 1000)
    }


    useEffect(() => {
        console.log(animation)
    }, [animation])
    return(
            <TaskWrapper className='animate__animated animate__fadeIn' animation={animation}>
                <TaskPriority priority={priority}/>
                <CheckTask check={check} icon={doneIcon} onClick={handleComplete}/>
                <TaskDetails check={completed}>
                    <span className="task-title">{title}</span>
                    <span className="task-date">{formatDate(date ? date.toString() : '')}</span>
                </TaskDetails>
                <DeleteTaskButton icon={trashIcon} onClick={handleDelete}/>
            </TaskWrapper>
    )
}