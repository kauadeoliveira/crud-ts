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
        background-color: #000;
        color: #fff;
        /* overflow-y: hidden; */
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
        grid-template-columns: 15vw 85vw;
    }
`