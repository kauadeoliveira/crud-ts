import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 10px;
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.palette.background.primary};
        color: ${({ theme }) => theme.palette.text.primary};
        display: flex;
    }
`

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    flex-wrap: wrap;

    main, section{
        width: 100%;
    }

    @media (min-width: 1024px){
        display: grid;
        grid-template-columns: 20vw 80vw;
    }

    @media (min-width: 1180px){
        display: grid;
        grid-template-columns: 15vw 85vw;
    }
`