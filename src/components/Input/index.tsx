import { InputWrapper, MyInput } from "./style";
import calendarFocus from "../../assets/images/calendar-focus.png"
import calendar from "../../assets/images/calendar.png"
import React from "react";

interface InputProps {
    type: string;
    maxLength?: number;
    width?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorTitle?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, maxLength, width, placeholder, onChange, errorTitle }, ref) => {
    return(
        <InputWrapper errorTitle={errorTitle}>
            <MyInput
             type={type}
             maxLength={maxLength}
             placeholder={placeholder}
             icon={[calendar, calendarFocus]}
             onChange={onChange}
             ref={ref}
            />
            <span className="error-message">Title is required.</span>
        </InputWrapper>
    )
})

export default Input