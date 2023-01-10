import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { modalSlice } from "../../store/slices/modalSlice"
import { FloatingButton } from "./style"
import newTaskIcon from "../../assets/images/new-task.svg"

export default function NewTaskButton() {
    const dispatch = useDispatch();
    const { openModalCreateTask } = modalSlice.actions;

    const handleClick = () => dispatch(openModalCreateTask());

    return(
        <FloatingButton onClick={handleClick} icon={newTaskIcon}/>
    )
}