import styled from "styled-components";

interface MyButton {
    background?: string;
    backgroundHover?: string;
    textColor?: string;
    size: 'small' | 'medium' | 'large';
}

export const MyButton = styled.div<MyButton>`
    background-color: ${({ background, theme }) => background ? background : theme.palette.colors.primary.main};
    color: ${({ textColor }) => textColor};
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ size }) => {
        switch(size){
            case 'large': 
                return '300px'
            break;
            case 'medium':
                return '150px'
            break;
            case 'small':
                return '75px'
            break;
        }
    }};
    height: ${({ size }) => {
        switch(size){
            case 'large':
                return '40px'
            break;
            case 'medium':
                return '30px'
            break;
            case 'small':
                return '20px';
            break;
        }
    }};
    font-size: ${({ size }) => {
        switch(size){
            case 'large':
                return '2.2em';
            break;
            case 'medium':
                return '1.7em';
            break;
            case 'small':
                return '1.2em';
            break;
        }
    }};
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s 0s ease;


    &:hover{
        background-color: ${({ backgroundHover, theme }) => backgroundHover ? backgroundHover : theme.palette.colors.primary.light};
    }
`