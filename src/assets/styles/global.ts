import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        padding: 1rem;
        font-size: 10px;
        font-family: sans-serif;
        background-color: #000;
        color: #fff;
    }

`