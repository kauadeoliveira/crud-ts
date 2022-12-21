import styled from "styled-components";

export const FloatingButton = styled.div`
    background-color: ${({ theme }) => theme.palette.colors.primary.main};
    text-align: center;
    line-height: 80px;
    font-size: 5em;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    position: fixed;
    bottom: 50px;
    right: 30px;
    cursor: pointer;
    transition: all 0.3s 0s ease;

    &:hover{
        background-color: ${({ theme }) => theme.palette.colors.primary.light};
    }
`