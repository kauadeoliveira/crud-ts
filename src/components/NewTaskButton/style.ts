import styled from "styled-components";


interface NewTaskBttnStyleProps{
    modalState: boolean
}

export const NewTaskBttn = styled.div<NewTaskBttnStyleProps>`
    width: 100%;
    height: 40px;
    background-color: ${({ theme, modalState }) => modalState ? theme.palette.primary.main : 'transparent'};
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;

    span{
        font-weight: bold;
        font-size: 15px;
        color: ${({ theme, modalState }) => modalState? theme.palette.text.primary : theme.palette.primary.main};
        transition: color .3s ease-in-out;

    }

    transition: box-shadow .3s ease-in-out;


    &:hover{
        box-shadow: inset 250px 0 0 0 ${({ theme }) => theme.palette.primary.main};

        span{
            color: #fff
        }
    }
`