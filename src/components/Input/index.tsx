import { InputWrapper, MyInput } from "./style";

import calendarFocus from "../../assets/images/calendar-focus.png"
import calendar from "../../assets/images/calendar.png"
import React from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    value?: string;
    size?: 'small' | 'medium' | 'large'; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelText?: string;
    error?: {
        errorStatus: boolean,
        errorMsg: string;
    };
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    { type, placeholder, onChange, error, value, size="medium", labelText }, ref
    ) => {
    return(
        <InputWrapper error={error?.errorStatus} label={labelText ? true : false}>
            <span className="label-text">{labelText}</span>
            <MyInput
             type={type}
             maxLength={40}
             placeholder={placeholder}
             icon={[calendar, calendarFocus]}
             onChange={onChange}
             ref={ref}
             defaultValue={value}
             inputSize={size}
            />
            <span className="error-message">{error?.errorMsg}</span>
        </InputWrapper>
    )
})

export default Input