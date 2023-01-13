import { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { TaskProps } from "../../types";
import { formatDate } from "../../utils/formatDate";

import { 
    CheckTask,
    DefaultModeTask,
    EditModeInputs,
    EditModeTask,
    SelectPriority,
    TaskButtons,
    TaskContainer,
    TaskDescription,
    TaskDetails,
    TaskIconButton
} from "./style";

import 'animate.css'
import Input from "../Input";
import trashHover from "../../assets/images/trash-hover.svg"
import doneHover from "../../assets/images/done-hover.png"
import doneIcon from "../../assets/images/done.png"
import trashIcon from "../../assets/images/trash.svg"
import Button from "../Button";


export default function Task({ title, date, id, priority, completed }: TaskProps) {
    const dispatch = useDispatch();
    
    const { completeTask } = tasksSlice.actions;
    const { deleteTask } = tasksSlice.actions;
    const { editTask } = tasksSlice.actions;

    const [check, setCheck] = useState<boolean | undefined>(completed);
    const [animation, setAnimation] = useState<'fadeIn' | 'fadeOut'>('fadeIn');
    const [editMode, setEditMode] = useState<boolean>(false);
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    
    const newTitleRef = createRef<HTMLInputElement>();
    const newDateRef = createRef<HTMLInputElement>();
    const newPriority = createRef<HTMLSelectElement>();

    const handleCompleteTask = () => {
        setCheck(!check);
        setTimeout(() => dispatch(completeTask({id, completed})), 200);
    };

    const handleDeleteTask = () => {
        setAnimation('fadeOut');
        setTimeout(() => dispatch(deleteTask(id)), 1000);
    };

    const switchEditMode = () => setEditMode(!editMode);

    const handleEditTask = () => {
        if(newTitleRef.current?.value){
            dispatch(
                editTask({
                    title: newTitleRef.current.value,
                    date: newDateRef.current?.value,
                    priority: newPriority.current?.value,
                    id,
                    completed,
                })
            );
            switchEditMode();
        }
    };

    const handleDisabledButton = () => setDisabledButton(newTitleRef.current?.value ? false : true);

    return(
        <TaskContainer editMode={editMode}>
            <DefaultModeTask className="default-mode" priority={priority} animation={animation}>
                <TaskDetails>
                    <CheckTask check={check} onClick={handleCompleteTask} icons={[doneIcon, doneHover]}/>
                    <TaskDescription onClick={switchEditMode}>
                        <span className="title-task">{title}</span>
                        <span className="date-task">{formatDate(date)}</span>
                    </TaskDescription>
                </TaskDetails>
                <TaskButtons>
                    <TaskIconButton icons={[trashIcon, trashHover]} onClick={handleDeleteTask}/>
                </TaskButtons>
            </DefaultModeTask>
            
            <EditModeTask className="edit-mode">
                <EditModeInputs>
                    <Input type="text" value={title} ref={newTitleRef} onChange={handleDisabledButton} size="small"/>
                    <SelectPriority defaultValue={priority} ref={newPriority}>
                        <option value="high">High</option>
                        <option value="middle">Middle</option>
                        <option value="low">Low</option>
                    </SelectPriority>
                    <Input type="date" value={date} ref={newDateRef} size="small"/>
                </EditModeInputs>
                <Button onClick={handleEditTask} size="small" disabled={disabledButton}>
                    Done
                </Button>
            </EditModeTask>
        </TaskContainer>
    )
}