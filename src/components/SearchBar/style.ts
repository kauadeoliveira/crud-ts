import styled from "styled-components";

interface SearchStyleProps {
    icon: string | string[];
    focus: boolean;
}

export const SearchContainer = styled.div<Pick<SearchStyleProps, 'focus'>>`
    width: 300px;
    height: 30px;
    background-color: ${({ theme }) => theme.palette.background.dark};
    border-radius: ${({ theme }) => theme.dimensions.input.borderRadius};
    border: ${({ theme }) => theme.dimensions.input.border};
    border-color: ${({ theme, focus }) => focus ? theme.palette.primary.main : 'transparent'};
    display: flex;
    padding: 0 5px;
    gap: 5px;

`

export const SearchIcon = styled.div<Pick<SearchStyleProps, 'icon' | 'focus'>>`
    height: 30px;
    width: 20px;
    background-image: url(${({ focus, icon }) => focus ? icon[1] : icon[0]});
    background-repeat: no-repeat;
    background-position: center;
`

export const SearchInput = styled.input<Pick<SearchStyleProps, 'icon'>>`
    width: 100%;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: transparent;

    &::-webkit-search-cancel-button{
        -webkit-appearance: none;
        background-image: url(${({ icon }) => icon[0]});
        height: 10px;
        width: 10px;
        margin-left: 5px;
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    &::-webkit-search-cancel-button:hover{
        background-image: url(${({ icon }) => icon[1]});
    }

`