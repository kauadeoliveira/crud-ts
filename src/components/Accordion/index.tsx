import { useEffect, useState } from "react";
import { AccordionBody, AccordionButton, AccordionHead, AccordionWrapper } from "./style";
import up from "../../assets/images/up.png"
import expandIcon from "../../assets/images/arrow.png"
import { TaskProps } from "../../types";

interface AccordionProps {
    children?: any
    title: string
}
export default function Accordion({ children, title }: AccordionProps) {
    const [expandAccordion, setExpandAccordion] = useState<boolean>(false);

    const handleExpand = () => setExpandAccordion(!expandAccordion);

    const [amountCompleteTasks, setAmountCompleteTasks] = useState<string>('0')
    const [amountTasks, setAmountTasks] = useState<number>(0) 

    const handleChangeChildrenAmount = () => {
        const amountValue = (children.filter((childrenElement: any) => childrenElement != undefined)).length 
        setAmountCompleteTasks(amountValue.toString())
    }

    useEffect(() => {
        handleChangeChildrenAmount()
        setAmountTasks(children.length)
    }, [children])

    return(
        <AccordionWrapper amountTasks={amountTasks}>
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