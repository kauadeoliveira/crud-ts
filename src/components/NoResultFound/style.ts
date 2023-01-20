import styled from "styled-components";

export const NoResultFoundContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    max-height: 100%;

    img{
        width: 300px;
    }
    
    p{
        width: 380px;
        font-weight: bold;
        font-size: 18px;
        font-family: "Open Sans", sans-serif;
    }
`