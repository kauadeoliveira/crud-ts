import styled from "styled-components";

export const NavBarContainer = styled.nav`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    background-color: ${({ theme }) => theme.palette.background.secondary};
    display: flex;
    flex-direction: column;
    box-shadow: -8px 1px 20px 0px #00000052;

    @media (max-width: 1024px){
        display: none;
    }
    padding: 10px 5px;
`

export const NavbarHead = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    padding: 20px 0;
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