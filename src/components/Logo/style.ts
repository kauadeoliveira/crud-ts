import styled from "styled-components";

export const MyLogo = styled.div`
    color: ${({ theme }) => theme.palette.main.primary};
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    cursor: default;

    @media (min-width: 1024px){
        flex-direction: row;
        gap: 5px;
        font-size: 30px;
    }
`