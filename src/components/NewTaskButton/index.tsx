import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { modalSlice } from "../../store/slices/modalSlice"
import { FloatingButton } from "./style"

export default function NewTaskButton() {
    const dispatch = useDispatch();
    const { open } = modalSlice.actions;

    const handleClick = () => dispatch(open());

    return(
        <FloatingButton onClick={handleClick}>+</FloatingButton>
    )
}