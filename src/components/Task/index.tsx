import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import 'animate.css'
import doneIcon from "../../assets/images/done.png"
import { abbreviateDate } from "../../utils/abbreviateDate";
import { formatDate } from "../../utils/formatDate";
import trashIcon from "../../assets/images/trash.png"
import { modalSlice } from "../../store/slices/modalSlice";
import Input from "../Input";
import { CheckTask, DefaultModeTask, DeleteTaskButton, EditTaskButton, TaskButtons, TaskContainer, TaskDescription, TaskDetails } from "./style";
import editIcon from "../../assets/images/edit.png"


export default function Task({ title, date, id, priority, completed }: TaskProps) {
    const { completeTask } = tasksSlice.actions
    const { deleteTask } = tasksSlice.actions
    const dispatch = useDispatch()

    const [check, setCheck] = useState<boolean | undefined>(completed);
    const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
    const [editMode, setEditMode] = useState<boolean>(false);

    const handleComplete = () => {
        setCheck(!check)
        setTimeout(() => dispatch(completeTask({id, completed})), 200)
    };

    const handleDelete = () => {
        setAnimation('fadeOut')
        setTimeout(() => dispatch(deleteTask(id)), 1000)
    }

    const handleClick = () => setEditMode(!editMode)


    return(
        <TaskContainer editMode={editMode} onClick={handleClick}>
            <DefaultModeTask className="default-mode" priority={priority}>
                <TaskDetails>
                    <CheckTask check={check} onClick={handleComplete} icon={doneIcon}/>
                    <TaskDescription>
                        <span className="title-task">{title}</span>
                        <span className="date-task">{date}</span>
                    </TaskDescription>
                </TaskDetails>
                <TaskButtons>
                    <DeleteTaskButton icon={trashIcon}/>
                    <EditTaskButton icon={editIcon}/>
                </TaskButtons>
            </DefaultModeTask>
            <div className="edit-mode">
                <h1>edit</h1>
            </div>
        </TaskContainer>
    )
}