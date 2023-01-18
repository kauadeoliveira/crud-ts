import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { modalSlice } from "../../store/slices/modalSlice"
import { FloatingButton } from "./style"
import { HiPlus } from "react-icons/hi"

export default function FloatingNewTaskButton() {
    const dispatch = useDispatch();
    const { openModalCreateTask } = modalSlice.actions;

    const handleClick = () => dispatch(openModalCreateTask());

    return(
        <FloatingButton onClick={handleClick}>
            <HiPlus />
        </FloatingButton>
    )
}