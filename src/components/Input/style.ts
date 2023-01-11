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
        color: ${({ theme }) => theme.palette.colors.priorities.high.main};
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
    background-color: ${({ theme }) => theme.palette.colors.background.dark};
    color: #fff;
    border: ${({ theme }) => theme.dimensions.input.border};

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