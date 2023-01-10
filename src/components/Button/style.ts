import styled from "styled-components";

interface MyButton {
    size: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

export const MyButton = styled.div<MyButton>`
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 0.3s 0s ease;
    
    /* Button State */
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
    background-color: ${({ theme, disabled }) => disabled ? theme.palette.colors.background.light : theme.palette.colors.primary.main};
    color: ${({ theme }) => theme.palette.text.disabled};



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
                return '40px';
            break;
            case 'medium':
                return '30px';
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


    &:hover{
        background-color: ${({ theme, disabled }) => disabled ? 'none' : theme.palette.colors.primary.light};
    }
`