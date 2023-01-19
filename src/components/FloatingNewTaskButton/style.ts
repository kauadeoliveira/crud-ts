import styled from "styled-components";

export const FloatingButton = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 15px;
    right: 15px;
    align-items: center;
    background-color: ${({ theme }) => theme.palette.main.primary};
    border-radius: 100%;
    cursor: pointer;
    z-index: 500;
    transition: all 0.3s 0s ease;

    svg{
        height: 50px;
        width: 50px;
        fill: #fff;
    }

    &:hover{
        background-color: ${({ theme }) => theme.palette.main.primary};
    }

    &:active{
        transform: scale(0.9);
    }

    @media (min-width: 1024px){
        display: none;
    }
`
