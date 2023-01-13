import styled from "styled-components";

interface HeaderStyleProps {
    icon: string[];
}

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 2rem;
    background-color: #000;
    font-size: .8em;
    gap: 10px;
    border-bottom: 1px solid rgb(50, 50, 50);

    @media (min-width: 1280px){
        display: none;
    }
`


export const Logo = styled.div`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px){
        font-size: 20px;
    }
`


export const HeaderNav = styled.nav`
    ul{
        display: flex;
        list-style: none;
        gap: 3px;
    }
`


export const HeaderIconButton = styled.a<Pick<HeaderStyleProps, 'icon'>>`
    display: block;
    height: 25px;
    width: 25px;
    background-image: url(${({ icon }) => icon[0]});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-image: url(${({ icon }) => icon[1]});
    }
`