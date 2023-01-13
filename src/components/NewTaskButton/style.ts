import styled from "styled-components";


interface FloatingButtonStyleProps {
    icon?: string
}
export const FloatingButton = styled.div<FloatingButtonStyleProps>`
    background-color: ${({ theme }) => theme.palette.primary.main};
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    width: 50px;
    text-align: center;
    font-size: 4em;
    border-radius: 100%;
    position: fixed;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 500;
    transition: all 0.3s 0s ease;

    &:hover{
        background-color: ${({ theme }) => theme.palette.primary.light};
    }
`