import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

import { 
    AccordionBody,
    AccordionButton,
    AccordionHead,
    AccordionWrapper
} from "./style";

import expandIcon from "../../assets/images/arrow.png"
import Task from "../Task";


interface AccordionProps {
    title: string;
}
export default function CompleteTaskList({ title }: AccordionProps) {
    const [expandAccordion, setExpandAccordion] = useState<boolean>(false);
    const [visibility, setVisibility] = useState<boolean>(false); 
    
    const { filtredTasks } = useAppSelector(store => store.tasks);
    const { inputValue } = useAppSelector(store => store.searchBar);
    const { tasks } = useAppSelector(store => store.tasks);

    const completeTasks = tasks.filter(task => task.completed);
    const handleExpand = () => setExpandAccordion(!expandAccordion);


    useEffect(() => {
        if(tasks.length === 0 || inputValue != ``){
            setVisibility(false)
        }else if(tasks.length > 0 && inputValue === ''){
            setVisibility(true)
        }
    }, [inputValue, tasks.length, filtredTasks.length])

    return(
        <AccordionWrapper visibility={visibility}>
            <AccordionHead expand={expandAccordion} onClick={handleExpand}>
                <AccordionButton expand={expandAccordion}> 
                    <img src={expandIcon}/>
                </AccordionButton>
                <span>{title} ({completeTasks.length.toString()})</span>
            </AccordionHead>
            <AccordionBody expand={expandAccordion}>
                {tasks.map(task => {
                    if(task.completed){
                        return (
                            <Task 
                             date={task.date}
                             id={task.id}
                             priority={task.priority}
                             title={task.title}
                             completed={task.completed}
                             key={task.id}
                            />
                        )
                    }
                })}
            </AccordionBody>
        </AccordionWrapper>
    )
}