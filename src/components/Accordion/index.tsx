import { useEffect, useState } from "react";
import { AccordionBody, AccordionButton, AccordionHead, AccordionWrapper } from "./style";
import up from "../../assets/images/up.png"
import expandIcon from "../../assets/images/arrow.png"
import { TaskProps } from "../../types";
import { useAppSelector } from "../../hooks/useAppSelector";

interface AccordionProps {
    children?: any
    title: string
}
export default function Accordion({ children, title }: AccordionProps) {
    const [expandAccordion, setExpandAccordion] = useState<boolean>(false);
    const handleExpand = () => setExpandAccordion(!expandAccordion);
    const { filtredTasks } = useAppSelector(store => store.tasks)

    const [amountCompleteTasks, setAmountCompleteTasks] = useState<string>('0')
    const [visibility, setVisibility] = useState<boolean>(false) 

    const handleChangeChildrenAmount = () => {
        const amountValue = (children.filter((childrenElement: any) => childrenElement != undefined)).length 
        setAmountCompleteTasks(amountValue.toString())
    }

    useEffect(() => {
        handleChangeChildrenAmount()
        if(filtredTasks.length > 0){
            setVisibility(false)
        }else if(children.length > 0){
            setVisibility(true)
        }
    }, [children])

    return(
        <AccordionWrapper visibility={visibility}>
            <AccordionHead expand={expandAccordion} onClick={handleExpand}>
                <AccordionButton expand={expandAccordion}> 
                    <img src={expandIcon}/>
                </AccordionButton>
                <span>{title} ({amountCompleteTasks})</span>
            </AccordionHead>
            <AccordionBody expand={expandAccordion}>
                {children}
            </AccordionBody>
        </AccordionWrapper>
    )
}