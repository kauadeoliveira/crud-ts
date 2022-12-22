import styled from "styled-components";

interface BackdropProps {
    state: boolean;
}

export const ModalBackdrop = styled.div<BackdropProps>`
    display: ${({ state }) => state ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 57%);
`
export const ModalWrapper = styled.div`
    width: 500px;
    height: 300px;
    background-color: rebeccapurple;
`
export const ModalHeader = styled.div`
    width: 100%;
    background-color: blue;
    color: white;


    span{
        cursor: pointer;
    }
`