import styled from "styled-components";

interface MyInputProps {
    icon: string[];
}

export const MyInput = styled.input<MyInputProps>`
    outline: none;
    width: ${({ width }) => width ? width : '100%'};
    border-radius: 5px;
    padding: 3px 5px;
    height: 40px;
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