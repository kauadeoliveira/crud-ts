import styled from "styled-components";


interface NewTaskBttnStyleProps{
    modalState: boolean
}

export const NewTaskBttn = styled.div<NewTaskBttnStyleProps>`
    width: 100%;
    height: 40px;
    border-radius: ${({ theme }) => theme.dimensions.button.borderRadius};
    border: 1px solid ${({ theme }) => theme.palette.main.primary};
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme, modalState }) => modalState ? 'inset 250px 0 0 0 #8257e6' : 'inset 0 0 0 0 #8257e6'};
    cursor: pointer;
    transition: .3s ease;

    svg{
        width: 18px;
        height: 18px;
        fill: ${({ theme, modalState }) => modalState ? '#fff' : theme.palette.main.primary};
    }

    span{
        font-weight: bold;
        font-size: 15px;
        color: ${({ theme, modalState }) => modalState? theme.palette.text.primary : theme.palette.main.primary};
    }

    &:hover{
        box-shadow: inset 250px 0 0 0 ${({ theme }) => theme.palette.main.primary};

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