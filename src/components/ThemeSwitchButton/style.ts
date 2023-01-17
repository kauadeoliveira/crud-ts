import styled from "styled-components";

export const ToggeButtonContainer = styled.div`
    label{
        width: 500px;
        height: 200px;
        position: relative;
        background: #ebebeb;
        border-radius: 200px;
        box-shadow: inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4);
        cursor: pointer;
        display: block;
        transition: .3s;
    }

    label:after{
        content: "";
        width: 180px;
        height: 180px;
        position: absolute;
        top: 10px;
        left: 10px;
        display: block;
        background: linear-gradient(180deg, #ffcc89, #d8860b);
        border-radius: 180px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        transition: .3s;
    }

    input{
        width: 0;
        height: 0;
        visibility: hidden
    }

    input:checked + label{
        background: #242424;
    }

    input:checked + label:after{
        left: 490px;
        transform: translateX(-100%);
        background: linear-gradient(180deg, #777, #3a3a3a);
    }

    label:active:after{
        width: 260px;
    }
`
// cria uma div container com label e input dentro, facilita a estilização 