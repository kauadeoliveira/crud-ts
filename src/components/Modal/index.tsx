import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { modalSlice } from "../../store/slices/modalSlice";
import { CloseButton, ModalBackdrop, ModalBody, ModalHead, ModalPriorityTask, ModalContainer } from "./style";
import { ActionParameter, RootState, TaskProps } from "../../types";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import close from "../../assets/images/close.png"
import closeHover from "../../assets/images/close-hover.png"
import Input from "../Input";
import Button from "../Button";
import { tasksSlice } from "../../store/slices/tasksSlice";
import 'animate.css'
import { abbreviateDate } from "../../utils/abbreviateDate";

export default function Modal() {
    // Redux
    const dispatch = useDispatch();
    const { openModalCreateTask } = modalSlice.actions;
    const { open } = useAppSelector(store => store.modal.modalCreateTask);
    const { addTask } = tasksSlice.actions

    // Task values
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

    const resetInputs = () => {
        const titleRefCurrent = titleRef.current;
        const dateRefCurrent = dateRef.current;
        const highRefCurrent = highRef.current;
        const middleRefCurrent = middleRef.current;
        const lowRefCurrent = lowRef.current;

        if(titleRefCurrent?.value){
            titleRefCurrent.value = '';
            setPriority('');
        }

        if(dateRefCurrent?.value){
            dateRefCurrent.value = abbreviateDate(new Date(Date.now()).toString());
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

        setErrorTitle(false)
    }

    // Close Modal Function
    const handleClose = () => {
        dispatch(openModalCreateTask()) ;
        resetInputs()
    }

    // Create Task Function
    const createTask = () => {
        if(titleRef.current?.value){
            dispatch(addTask({
                title: titleRef.current.value,
                date: dateRef.current?.value,
                priority: priority
            }))
            setErrorTitle(false)
            handleClose()
        }
        else{
            setErrorTitle(true)
        }
    }
    return(
        <ModalBackdrop state={open}>
            <ModalContainer>
                <ModalHead>
                    <span>Create Task</span>
                    <CloseButton icon={[close, closeHover]} onClick={handleClose}/>
                </ModalHead>
                <ModalBody>
                    <Input
                        type="text"
                        placeholder="Title"
                        ref={titleRef}
                        labelText="Task title"
                        error={{
                            errorStatus: errorTitle,
                            errorMsg: 'Title is required.'
                        }}
                    />
                    <Input
                        type="date"
                        ref={dateRef}
                        labelText="Task date"
                        value={abbreviateDate(new Date(Date.now()).toString())}
                    />
                    <ModalPriorityTask>
                        <input 
                         type="radio"
                         name="priority"
                         id="high"
                         onChange={handlePriority}
                         ref={highRef}
                        />
                        <label htmlFor="high" className="high">High</label>
 
                        <input 
                         type="radio" 
                         name="priority" 
                         id="middle" 
                         onChange={handlePriority} 
                         ref={middleRef}
                        />
                        <label htmlFor="middle" className="middle">Middle</label>
                         
                        <input 
                         type="radio" 
                         name="priority" 
                         id="low" 
                         onChange={handlePriority} 
                         ref={lowRef}
                        />
                        <label htmlFor="low" className="low">Low</label>
                    </ModalPriorityTask>
                <Button size="large" onClick={createTask}>Done</Button>
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    )
}
