import styled from "styled-components";



export const MyInput = styled.input`
    outline: none;
    width: ${({ width }) => width ? width : '100%'};
    border-radius: 5px;
    padding: 3px 5px;
    height: 40px;
    background-color: ${({ theme }) => theme.palette.colors.background.dark};
    color: #fff;
    border: 1px solid transparent;
`