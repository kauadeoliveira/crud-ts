import styled from "styled-components";

export const FloatingButton = styled.div`
    background-color: ${({ theme }) => theme.palette.colors.primary.main};
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 4em;
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