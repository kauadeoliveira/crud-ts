import { createRef, useEffect, useRef, useState } from "react";
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
import { CheckTask, DefaultModeTask, EditModeInputs, EditModeTask, TaskButton, TaskButtons, TaskContainer, TaskDescription, TaskDetails, TaskIconButton } from "./style";
import editIcon from "../../assets/images/edit.png"
import editHover from "../../assets/images/edit-hover.png"
import trashHover from "../../assets/images/trash-hover.png"
import doneHover from "../../assets/images/done-hover.png"
import Button from "../Button";


export default function Task({ title, date, id, priority, completed }: TaskProps) {
    const { completeTask } = tasksSlice.actions
    const { deleteTask } = tasksSlice.actions
    const { editTask } = tasksSlice.actions
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

    const switchEditMode = () => setEditMode(!editMode)


    // Edit Mode
    const [newTitleValue, setNewTitleValue] = useState<string>(title);
    const [newDateValue, setNewDateValue] = useState<string>(date);

    const newTitleRef = createRef<HTMLInputElement>();
    const newDateRef = createRef<HTMLInputElement>();

    const handleEditTask = () => {
        if(newTitleRef.current?.value){
            dispatch(editTask({title: newTitleRef.current.value, date: newDateRef.current?.value, id, priority, completed}))
        }
  
        switchEditMode()
    }

    store.subscribe(() => console.log(store.getState()))
    return(
        <TaskContainer editMode={editMode}>
            <DefaultModeTask className="default-mode" priority={priority} animation={animation}>
                <TaskDetails>
                    <CheckTask check={check} onClick={handleComplete} icons={[doneIcon, doneHover]}/>
                    <TaskDescription>
                        <span className="title-task">{title}</span>
                        <span className="date-task">{formatDate(date)}</span>
                    </TaskDescription>
                </TaskDetails>
                <TaskButtons>
                    <TaskIconButton icons={[editIcon, editHover]} onClick={switchEditMode}/>
                    <TaskIconButton icons={[trashIcon, trashHover]} onClick={handleDelete}/>
                </TaskButtons>
            </DefaultModeTask>
            <EditModeTask className="edit-mode">
                <EditModeInputs>
                    <Input type="text" height="30px" value={title} ref={newTitleRef}/>
                    <Input type="date" height="30px" value={date} ref={newDateRef}/>
                </EditModeInputs>
                <Button onClick={handleEditTask} width="50px">
                    Done
                </Button>
            </EditModeTask>
        </TaskContainer>
    )
}