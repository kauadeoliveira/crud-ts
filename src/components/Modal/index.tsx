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

interface ModalComponentProps {
    title: string;
    open: boolean;
    taskAction: (action?: any) => any
    modalAction: () => any;
}

export default function Modal({ title, modalAction, taskAction, open }: ModalComponentProps) {
    // Redux
    const dispatch = useDispatch();
    // const { open } = modalSlice.actions;
    // const { addTask } = tasksSlice.actions;
    // const { openModal } = useAppSelector(store => store.modal);
    
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
        dispatch(modalAction()) ;
        resetInputs()
    }

    // Create Task Function
    const createTask = () => {
        if(titleRef.current?.value){
            dispatch(taskAction({
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
    store.subscribe(() => console.log(store.getState()))
    return(
        <ModalBackdrop state={open}>
            <ModalContainer>
                <ModalHead>
                    <span>{title}</span>
                    <CloseButton icon={[close, closeHover]} onClick={handleClose}/>
                </ModalHead>
                <ModalBody>
                    <Input
                     type="text"
                     width="80%"
                     placeholder="Title" 
                     ref={titleRef}
                     errorTitle={errorTitle}
                    />
                    <Input
                     type="date"
                     width="80%"
                     ref={dateRef}
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
                        <label htmlFor="high" className="high">High Priority</label>
 
                        <input 
                         type="radio" 
                         name="priority" 
                         id="middle" 
                         onChange={handlePriority} 
                         ref={middleRef}
                        />
                        <label htmlFor="middle" className="middle">Middle Priority</label>
                         
                        <input 
                         type="radio" 
                         name="priority" 
                         id="low" 
                         onChange={handlePriority} 
                         ref={lowRef}
                        />
                        <label htmlFor="low" className="low">Low Priority</label>
                    </ModalPriorityTask>
                <Button width="80%" onClick={createTask}>Done</Button>
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    )
}
