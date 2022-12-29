import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { modalSlice } from "../../store/slices/modalSlice";
import { CloseButton, ModalBackdrop, ModalContent, ModalHeader, ModalPriorityTask, ModalWrapper } from "./style";
import { RootState, Task } from "../../types";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import close from "../../assets/images/close.png"
import Input from "../Input";
import Button from "../Button";
import { tasksSlice } from "../../store/slices/tasksSlice";



export default function Modal() {
    const dispatch = useDispatch();
    const { open } = modalSlice.actions;
    const { addTask } = tasksSlice.actions;
    const { openModal } = useAppSelector(store => store.modal);
    
    // Task values
    const [titleErrorMsg, setTitleErrorMsg] = useState<boolean>();
    const [priority, setPriority] = useState<string>();
    const [errorTitle, setErrorTitle] = useState<boolean>(false);
    
    const titleRef = createRef<HTMLInputElement>();
    const dateRef = createRef<HTMLInputElement>();
    const highRef = createRef<HTMLInputElement>();
    const middleRef = createRef<HTMLInputElement>();
    const lowRef = createRef<HTMLInputElement>();

    const handlePriority = () => {
        if(highRef.current?.checked){
            setPriority('high');
        }
        if(middleRef.current?.checked){
            setPriority('middle');
        }
        if(lowRef.current?.checked){
            setPriority('low');
        }
    }

    const handleClose = () => {
        dispatch(open()) ;
        resetInputs()
    }
    const resetInputs = () => {
        const titleRefCurrent = titleRef.current;
        const dateRefCurrent = dateRef.current;
        const highRefCurrent = highRef.current;
        const middleRefCurrent = middleRef.current;
        const lowRefCurrent = lowRef.current;

        if(titleRefCurrent?.value && dateRefCurrent?.value){
            titleRefCurrent.value = '';
            dateRefCurrent.value = '';
            setPriority('');
        }

        if(highRefCurrent?.checked){
            highRefCurrent.checked = false;
        }

        if(middleRefCurrent?.checked){
            middleRefCurrent.checked = false;
        }

        if(lowRefCurrent?.checked){
            lowRefCurrent.checked = false;
        }
    }

    const createTask = () => {
        if(titleRef.current?.value && titleRef.current.value != ''){
            dispatch(addTask({
                title: titleRef.current.value,
                dateRef: titleRef.current.value,
                priority: priority
            }))
            setErrorTitle(false)
            handleClose()
        }
        else{
            setErrorTitle(true)
        }
    }

    store.subscribe(() => console.log(store.getState()));
    return(
        <ModalBackdrop state={openModal}>
            <ModalWrapper>
                <ModalHeader>
                    <span>New Task</span>
                    <CloseButton icon={close} onClick={handleClose}/>
                </ModalHeader>
                <ModalContent>
                    <Input type="text" width="80%" placeholder="Title" ref={titleRef} errorTitle={errorTitle}/>
                    <Input
                     type="date"
                     width="80%"
                     ref={dateRef}
                     />
                    <ModalPriorityTask>
                        <input type="radio" name="priority" id="high" onChange={handlePriority} ref={highRef}/>
                        <label htmlFor="high" className="high">High Priority</label>

                        <input type="radio" name="priority" id="middle" onChange={handlePriority} ref={middleRef}/>
                        <label htmlFor="middle" className="middle">Middle Priority</label>
                        
                        <input type="radio" name="priority" id="low" onChange={handlePriority} ref={lowRef}/>
                        <label htmlFor="low" className="low">Low Priority</label>
                    </ModalPriorityTask>
                </ModalContent>
                <Button width="70%" onClick={createTask}>Create Task</Button>
            </ModalWrapper>
        </ModalBackdrop>
    )
}