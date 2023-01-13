import styled from "styled-components";

export const MyLogo = styled.div`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold;
    font-size: 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px){
        font-size: 20px;
    }
`