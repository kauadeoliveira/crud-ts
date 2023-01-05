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

    const [amount, setAmount] = useState<string>('0')

    const handleChangeChildrenAmount = () => {
        const amountValue = (children.filter((childrenElement: any) => childrenElement != undefined)).length 
        setAmount(amountValue.toString())
    }

    useEffect(() => handleChangeChildrenAmount(), [children])

    return(
        <AccordionWrapper>
            <AccordionHead expand={expandAccordion} onClick={handleExpand}>
                <AccordionButton expand={expandAccordion}> 
                    <img src={expandIcon}/>
                </AccordionButton>
                <span>{title} ({amount})</span>
            </AccordionHead>
            <AccordionBody expand={expandAccordion}>
                {children}
            </AccordionBody>
        </AccordionWrapper>
    )
}