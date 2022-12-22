import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    background?: string;
    backgroundHover?: string;
    textColor?: string;
}

export default function Button({ children, background, backgroundHover, textColor }: ButtonProps) {
    return(
        <MyButton 
         background={background}
         backgroundHover={backgroundHover}
         textColor={textColor}
        >
            {children}
        </MyButton>
    )
}