import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    background?: string;
    backgroundHover?: string;
    textColor?: string;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large'
}

export default function Button({ children, background, backgroundHover, textColor, onClick, size }: ButtonProps) {
    return(
        <MyButton 
         background={background}
         backgroundHover={backgroundHover}
         textColor={textColor}
         onClick={onClick}
         size={size}
        >
            {children}
        </MyButton>
    )
}