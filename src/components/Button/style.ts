import styled from "styled-components";

interface ButtonStyleProps {
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export const MyButton = styled.div<ButtonStyleProps>`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 0.3s 0s ease;
    
    /* Button State */
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    background-color: ${({ theme, disabled }) => disabled ? theme.palette.background.light : theme.palette.primary.main};
    color: ${({ theme, disabled }) => disabled ? theme.palette.text.disabled : '#fff'};



    /* Size */
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
                return '30px';
            break;
            case 'medium':
                return '25px';
            break;
            case 'small':
                return '20px';
            break;
        }
    }};
    
    font-size: ${({ size }) => {
        switch(size){
            case 'large':
                return '1.6em';
            break;
            case 'medium':
                return '1.4em';
            break;
            case 'small':
                return '1.2em';
            break;
        }
    }};


    &:hover{
        background-color: ${({ theme, disabled }) => disabled ? 'none' : theme.palette.primary.light};
    }
`