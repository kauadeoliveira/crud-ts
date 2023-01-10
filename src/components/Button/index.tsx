import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export default function Button({ children, onClick, size, disabled }: ButtonProps) {
    return(
        <MyButton 
         disabled={disabled}
         onClick={onClick}
         size={size}
        >
            {children}
        </MyButton>
    )
}