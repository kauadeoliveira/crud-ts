import styled from "styled-components";

interface MyInputProps {
    icon: string[];
    inputSize: 'small' | 'medium' | 'large';
}

interface InputWrapper {
    error?: boolean;
    label?: boolean;
}

export const InputWrapper = styled.div<InputWrapper>`
    display: flex;
    flex-direction: column;
    gap: 3px;
    .error-message{
        display: ${({ error }) => error ? 'inline-block' : 'none'};
        color: ${({ theme }) => theme.palette.priorities.high.main};
        margin-left: 3px;
    }

    .label-text{
        font-weight: bold;
        font-size: 1.3em;
        color: ${({ theme }) => theme.palette.text.disabled};
        margin-left: 5px;
        display: ${({ label }) => label ? 'inline-block' : 'none'};
    }
`

export const MyInput = styled.input<MyInputProps>`
    outline: none;
    border-radius: ${({ theme }) => theme.dimensions.input.borderRadius};
    padding: ${({ theme }) => theme.dimensions.input.padding};
    background-color: ${({ theme }) => theme.palette.background.primary};
    color: #fff;
    border: ${({ theme }) => theme.dimensions.input.border};
    border-color: transparent;

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
                return '30px';
            break;
        }
    }};



    &[type="date"]::-webkit-calendar-picker-indicator{
        background-image: url(${({ icon }) => icon[0]});
        width: 15px;
        height: 15px;
        background-repeat: no-repeat;
        background-position: center;
    }

    &:focus{
        border-color: ${({ theme }) => theme.palette.main.primary};

        &[type="date"]::-webkit-calendar-picker-indicator{
            background-image: url(${({ icon }) => icon[1]});
        }
    }
`