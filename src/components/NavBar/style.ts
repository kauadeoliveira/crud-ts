import styled from "styled-components";

export const NavBarContainer = styled.nav`
    width: 100%;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

export const NavbarBody = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 5px;
    gap: 20px;


`
export const NavBarMain = styled.ul`
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(50, 50, 50);
    height: 15vh;
`

export const NavBarSocials = styled.ul`
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: column;
`

export const NavBarSocialItem = styled.a`
    width: 100%;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    img{
        height: 20px;
        width: 20px;
    }
`