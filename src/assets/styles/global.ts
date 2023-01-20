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
        overflow-x: hidden;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    max-width: 100%;

    main, section{
        width: 100%;
    }

    @media (min-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 4fr;
    }

    @media (min-width: 1180px){
        display: grid;
        grid-template-columns: 1fr 5fr;
    }
`