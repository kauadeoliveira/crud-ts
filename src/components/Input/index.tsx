import { MyInput } from "./style";
import calendarFocus from "../../assets/images/calendar-focus.png"
import calendar from "../../assets/images/calendar.png"
import React from "react";

interface InputProps {
    type: string;
    maxLength?: number;
    width?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, maxLength, width, placeholder, onChange }, ref) => {
    return(
        <MyInput
         type={type}
         maxLength={maxLength}
         width={width}
         placeholder={placeholder}
         icon={[calendar, calendarFocus]}
         onChange={onChange}
         ref={ref}
        />
    )
})

export default Input