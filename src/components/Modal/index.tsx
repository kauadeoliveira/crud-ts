import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { modalSlice } from "../../store/slices/modalSlice";
import { CloseButton, ModalBackdrop, ModalContent, ModalHeader, ModalPriorityTask, ModalWrapper } from "./style";
import { RootState } from "../../types";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import close from "../../assets/images/close.png"
import Input from "../Input";
import Button from "../Button";



export default function Modal() {
    const dispatch = useDispatch();
    const { open } = modalSlice.actions
    const handleClose = () => dispatch(open()) 
    const { openModal } = useAppSelector(store => store.modal)

    return(
        <ModalBackdrop state={openModal}>
            <ModalWrapper>
                <ModalHeader>
                    <CloseButton icon={close} onClick={handleClose}/>
                </ModalHeader>
                <ModalContent>
                    <Input type="text" width="80%" placeholder="Title"/>
                    <Input
                     type="date"
                     width="80%"
                     />
                    <ModalPriorityTask>
                        <input type="radio" name="priority" id="high" />
                        <label htmlFor="high" className="high">High Priority</label>
                        <input type="radio" name="priority" id="middle" />
                        <label htmlFor="middle" className="middle">Middle Priority</label>
                        <input type="radio" name="priority" id="low" />
                        <label htmlFor="low" className="low">Low Priority</label>
                    </ModalPriorityTask>
                </ModalContent>
                <Button width="70%">Create Task</Button>
            </ModalWrapper>
        </ModalBackdrop>
    )
}