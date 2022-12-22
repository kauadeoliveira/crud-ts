import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode;
    background?: string;
    backgroundHover?: string;
    textColor?: string;
    width?: string;
}

export default function Button({ children, background, backgroundHover, textColor, width }: ButtonProps) {
    return(
        <MyButton 
         background={background}
         backgroundHover={backgroundHover}
         textColor={textColor}
         width={width}
        >
            {children}
        </MyButton>
    )
}