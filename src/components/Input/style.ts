import styled from "styled-components";

interface MyInputProps {
    icon: string[];
    inputSize: 'small' | 'medium' | 'large';
}

interface InputWrapper {
    error?: boolean;
}

export const InputWrapper = styled.div<InputWrapper>`
    display: flex;
    flex-direction: column;
    gap: 3px;
    .error-message{
        display: ${({ error }) => error ? 'inline-block' : 'none'};
        color: ${({ theme }) => theme.palette.colors.priorities.high.background};
        margin-left: 3px;
    }

    .label-text{
        font-weight: bold;
        font-size: 1.3em;
        color: ${({ theme }) => theme.palette.text.disabled};
        margin-left: 5px;
    }
`

export const MyInput = styled.input<MyInputProps>`
    outline: none;
    border-radius: 5px;
    padding: 3px 5px;
    background-color: ${({ theme }) => theme.palette.colors.background.dark};
    color: #fff;
    border: 1px solid transparent;

    /* Size */
    width: ${({ inputSize }) => {
        switch(inputSize){
            case 'large':
                return '400px';
            break;
            case 'medium':
                return '300px';
            break;
            case 'small':
                return '200px';
            break;
        }
    }};

    height: ${({ inputSize }) => {
        switch(inputSize){
            case 'large':
                return '50px';
            break;
            case 'medium':
                return '40px';
            break;
            case 'small':
                return '20px';
            break;
        }
    }};



    &[type="date"]::-webkit-calendar-picker-indicator{
        background-image: url(${({ icon }) => icon[0]});
        width: 15px;
        height: 15px;
    }

    &:focus{
        border-color: ${({ theme }) => theme.palette.colors.primary.main};

        &[type="date"]::-webkit-calendar-picker-indicator{
            background-image: url(${({ icon }) => icon[1]});
        }
    }
`

export const MyInputIcon = styled.input<MyInputProps> `
    background-image: url(${({ icon }) => icon[0]});
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
`