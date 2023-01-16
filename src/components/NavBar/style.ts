import styled from "styled-components";

export const NavBarContainer = styled.nav`
    width: 15vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.palette.background.dark};
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px){
        display: none;
    }
`

export const NavbarHead = styled.div`
    height: 15vh;
    width: 100%;
    border-bottom: 1px solid rgb(50, 50, 50);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const NavbarBody = styled.ul`
    height: 100%;
    width: 100%;
    padding: 5px;

    ul{
        width: 100%;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
`