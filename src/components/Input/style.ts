import styled from "styled-components";

interface MyInputProps {
    icon: string[];
    height?: string;
}

interface InputWrapper {
    width?: string;
    errorTitle?: boolean
}

export const InputWrapper = styled.div<InputWrapper>`
    width: ${({ width }) => width ? width : '100%'};
    display: flex;
    flex-direction: column;
    gap: 3px;
    .error-message{
        display: ${({ errorTitle }) => errorTitle ? 'inline-block' : 'none'};
        color: ${({ theme }) => theme.palette.colors.priorities.high.background};
        margin-left: 3px;
    }
`

export const MyInput = styled.input<MyInputProps>`
    outline: none;
    width: 100%;
    border-radius: 5px;
    padding: 3px 5px;
    height: ${({ height }) => height ? height : '40px'};
    background-color: ${({ theme }) => theme.palette.colors.background.dark};
    color: #fff;
    border: 1px solid transparent;
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