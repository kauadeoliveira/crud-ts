import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 300px;
    height: 30px;
    /* background-color: ${({ theme }) => theme}; */
    display: flex;
`

export const SearchIcon = styled.div`
    height: 30px;
    width: 30px;
    border-right: 1px solid white;
    padding: ${({ theme }) => theme.dimensions.input.padding};

`

export const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    background-color: transparent;
`