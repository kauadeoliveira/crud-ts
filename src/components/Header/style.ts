import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    padding: 8px;
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.light};
    font-size: 1.5em;
`

export const Logo = styled.div`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
`