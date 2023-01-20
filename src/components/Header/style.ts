import styled from "styled-components";

interface HeaderStyleProps {
    icon: string[] | string;
}

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 20px;
    background-color: #000;
    font-size: .8em;
    gap: 10px;
    box-shadow: 2px 3px 11px 0px rgba(0, 0, 0, 0.6);
    position: sticky;
    top: 0;

    @media (min-width: 1024px){
        display: none;
    }
`
export const HeaderNav = styled.nav`
    ul{
        display: flex;
        list-style: none;
        gap: 3px;
    }
`


export const HeaderIconButton = styled.div<Pick<HeaderStyleProps, 'icon'>>`
    display: block;
    height: 25px;
    width: 25px;
    background-image: url(${({ icon }) => typeof icon != 'string' ? icon[0] : icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    transition: background-image all .3s;

    &:hover{
        background-image: url(${({ icon }) => typeof icon != 'string' ? icon[1] : icon});
    }
`