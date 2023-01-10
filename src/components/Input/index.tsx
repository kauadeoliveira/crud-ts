import { InputWrapper, MyInput } from "./style";
import calendarFocus from "../../assets/images/calendar-focus.png"
import calendar from "../../assets/images/calendar.png"
import React from "react";

interface InputProps {
    type: string;
    maxLength?: number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: {
        errorStatus: boolean,
        errorMsg: string;
    };
    value?: string;
    size?: 'small' | 'medium' | 'large'; 
    labelText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    { type, maxLength, placeholder, onChange, error, value, size="medium", labelText }, ref
    ) => {
    return(
        <InputWrapper error={error?.errorStatus}>
            <span className="label-text">{labelText}</span>
            <MyInput
             type={type}
             maxLength={maxLength}
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