import { MyInput } from "./style";
import calendarFocus from "../../assets/images/calendar-focus.png"
import calendar from "../../assets/images/calendar.png"

interface InputProps {
    type: string;
    maxLength?: number;
    width?: string;
    placeholder?: string;

}

export default function Input({ type, maxLength, width, placeholder }: InputProps) {
    return(
        <MyInput type={type} maxLength={maxLength} width={width} placeholder={placeholder} icon={[calendar, calendarFocus]}/>
    )
}