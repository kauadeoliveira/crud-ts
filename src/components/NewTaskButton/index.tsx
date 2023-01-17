import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { NewTaskBttn } from "./style"

interface AddTaskButtonProps{
    onClick?: () => void
}

export default function NewTaskButton({ onClick }: AddTaskButtonProps) {
    const { open } = useAppSelector(store => store.modal.modalCreateTask)

    return(
        <NewTaskBttn onClick={onClick} modalState={open}>
            <span>New Task</span>
        </NewTaskBttn>
    )
} 