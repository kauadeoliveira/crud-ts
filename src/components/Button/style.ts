import styled from "styled-components";

interface MyButton {
    background?: string;
    backgroundHover?: string;
    textColor?: string;
}

export const MyButton = styled.div<MyButton>`
    background-color: ${({ background, theme }) => {
        if(background != undefined){
            return background;
        }
        else{
            return theme.palette.colors.primary.main
        }
    }};

    color: ${({ textColor }) => {
        if(textColor != undefined){
            return textColor;
        }
        else{
            return '#fff';
        }
    }};
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    width: 70%;
    height: 50px;

    text-align: center;
    line-height: 50px;
    font-size: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s 0s ease;

    &:hover{
        background-color: ${({ backgroundHover, theme }) => {
            if(backgroundHover != undefined){
                return backgroundHover;
            }
            else{
                return theme.palette.colors.primary.light;
            }
        }};
    }
`