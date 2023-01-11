import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.colors.background.light};
`

export const Logo = styled.div`
    color: ${({ theme }) => theme.palette.colors.primary.main};
    font-weight: bold;
`

export const SearchBar = styled.div`
    background-color: red;

`