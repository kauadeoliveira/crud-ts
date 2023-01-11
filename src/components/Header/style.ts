import styled from "styled-components";

interface HeaderStyleProps {
    icon: string[];
}

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 8px;
    /* background-color: ${({ theme }) => theme.palette.background.dark}; */
    background-color: #000;
    font-size: 1em;
    justify-content: space-between;
`

export const Logo = styled.div`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
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
    height: 30px;
    width: 30px;
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