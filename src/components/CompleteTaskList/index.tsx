import { useEffect, useState } from "react";
import { AccordionBody, AccordionButton, AccordionHead, AccordionWrapper } from "./style";
import up from "../../assets/images/up.png"
import expandIcon from "../../assets/images/arrow.png"
import { TaskProps } from "../../types";
import { useAppSelector } from "../../hooks/useAppSelector";
import Task from "../Task";
import { store } from "../../store";

interface AccordionProps {
    title: string
}
export default function CompleteTaskList({ title }: AccordionProps) {
    const [expandAccordion, setExpandAccordion] = useState<boolean>(false);
    const handleExpand = () => setExpandAccordion(!expandAccordion);
    const { filtredTasks } = useAppSelector(store => store.tasks)
    const { inputValue } = useAppSelector(store => store.searchBar)
    const [amountCompleteTasks, setAmountCompleteTasks] = useState<string>('0')
    const [visibility, setVisibility] = useState<boolean>(false) 
    const { tasks } = useAppSelector(store => store.tasks)
    const completeTasks = tasks.filter(task => task.completed)
    const { focused } = useAppSelector(store => store.searchBar)

    useEffect(() => {
        if(inputValue !== '' && focused || tasks.length === 0){
            setVisibility(false)
        }else if(tasks.length > 0){
            setVisibility(true)
        }
    }, [completeTasks, tasks])

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