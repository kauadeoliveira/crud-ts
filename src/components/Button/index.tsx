import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    background?: string;
    backgroundHover?: string;
    textColor?: string;
    width?: string;
    onClick?: () => void;
}

export default function Button({ children, background, backgroundHover, textColor, width, onClick }: ButtonProps) {
    return(
        <MyButton 
         background={background}
         backgroundHover={backgroundHover}
         textColor={textColor}
         width={width}
         onClick={onClick}
        >
            {children}
        </MyButton>
    )
}