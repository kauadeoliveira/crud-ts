import styled from "styled-components";

interface SearchStyleProps {
    focus: boolean;
    icon: string | string[];
}

export const SearchContainer = styled.div<Pick<SearchStyleProps, 'focus'>>`
    width: 85%;
    height: 35px;
    background-color: ${({ theme }) => theme.palette.background.primary};
    border-radius: ${({ theme }) => theme.dimensions.input.borderRadius};
    border: ${({ theme }) => theme.dimensions.input.border};
    border-color: ${({ theme, focus }) => focus ? theme.palette.main.primary : theme.palette.text.disabled};
    display: flex;
    padding: 0 5px;
    gap: 5px;

    @media (min-width: 1024px){
        height: 40px;
        width: 100%;
        /* background-color: ${({ theme }) => theme.palette.background.primary}; */
        background-color: #fff;
    }
`

export const SearchIcon = styled.div<Pick<SearchStyleProps, 'focus'>>`
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        width: 20px;
        height: 20px;
        fill: ${({ theme, focus }) => focus ? theme.palette.main.primary : theme.palette.text.disabled}
        /* fill: ${({ theme }) => theme.palette.main.primary}; */
    }
`

export const SearchInput = styled.input<Pick<SearchStyleProps, 'icon'>>`
    width: 100%;
    outline: none;
    border: none;
    color: #000;
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
`
