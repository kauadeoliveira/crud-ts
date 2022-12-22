import React from "react";
import { MyButton } from "./style";

interface ButtonProps {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
    return(
        <MyButton>{children}</MyButton>
    )
}