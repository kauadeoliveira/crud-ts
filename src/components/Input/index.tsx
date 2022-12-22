import { MyInput } from "./style";

interface InputProps {
    type: string;
    maxLength?: number;
    width?: string;
    placeholder?: string;
}

export default function Input({ type, maxLength, width, placeholder }: InputProps) {
    return(
        <MyInput type={type} maxLength={maxLength} width={width} placeholder={placeholder}/>
    )
}