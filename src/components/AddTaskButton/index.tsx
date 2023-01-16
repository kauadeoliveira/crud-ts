import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { AddTaskBttn } from "./style"

interface AddTaskButtonProps{
    onClick?: () => void
}

export default function AddTaskButton({ onClick }: AddTaskButtonProps) {
    const { open } = useAppSelector(store => store.modal.modalCreateTask)

    return(
        <AddTaskBttn onClick={onClick} modalState={open}>
            <span>Add Task</span>
        </AddTaskBttn>
    )
} 