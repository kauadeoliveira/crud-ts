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
    gap: 5px;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    transition: .3s ease;

    svg{
        width: 18px;
        height: 18px;
        fill: ${({ theme, modalState }) => modalState ? '#fff' : theme.palette.primary.main};
    }

    span{
        font-weight: bold;
        font-size: 15px;
        color: ${({ theme, modalState }) => modalState? theme.palette.text.primary : theme.palette.primary.main};
    }

    &:hover{
        box-shadow: inset 250px 0 0 0 ${({ theme }) => theme.palette.primary.main};

        span{
            color: #fff
        }

        svg{
            fill: #fff;
        }
    }

    &:active{
        transform: scale(0.8);
    }
`