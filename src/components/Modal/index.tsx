import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { modalSlice } from "../../store/slices/modalSlice";
import React, { createRef, useEffect, useRef, useState, } from "react";
import { tasksSlice } from "../../store/slices/tasksSlice";
import { abbreviateDate } from "../../utils/abbreviateDate";
import { HiX } from "react-icons/hi"

import { 
    CloseButton,
    ModalBackdrop,
    ModalBody,
    ModalHead,
    ModalPriorityTask,
    ModalContainer
} from "./style";

import Input from "../Input";
import Button from "../Button";
import 'animate.css';
import { store } from "../../store";

export default function Modal() {
    const dispatch = useDispatch();
    const { openModalCreateTask } = modalSlice.actions;
    const { open } = useAppSelector(store => store.modal.modalCreateTask);
    const { addTask } = tasksSlice.actions;
    const { tasks } = useAppSelector(store => store.tasks)

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

        setErrorTitle(false);
    }

    const closeModal = () => {
        dispatch(openModalCreateTask());
        resetInputs();
    }

    const createTask = () => {
        if(titleRef.current?.value){
            dispatch(
                addTask(
                    {
                        title: titleRef.current.value,
                        date: dateRef.current?.value,
                        priority: priority,
                    }
                )
            )
            setErrorTitle(false);
            closeModal();
        }
        else{
            setErrorTitle(true);
        }
    }
    
    const createTaskOnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' ? createTask() : false
    return(
        <ModalBackdrop state={open}>
            <ModalContainer>
                <ModalHead>
                    <span>Create Task</span>
                    <CloseButton onClick={closeModal}>
                        <HiX />
                    </CloseButton>
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
                     onKeyDown={createTaskOnPressEnter}
                    />
                    <Input
                     type="date"
                     ref={dateRef}
                     labelText="Task date"
                     value={abbreviateDate(new Date(Date.now()).toString())}
                     onKeyDown={createTaskOnPressEnter}
                    />
                    <ModalPriorityTask>
                        <span>Priority</span>
                        <div className="priorities">
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
                        </div>
                    </ModalPriorityTask>
                    <Button size="large" onClick={createTask}>Done</Button>
                </ModalBody>
            </ModalContainer>
        </ModalBackdrop>
    )
}
