import styled from "styled-components";

interface ModalStyleProps {
    state: boolean;
}

interface CloseButtonProps {
    icon: string[];
}

export const ModalBackdrop = styled.div<ModalStyleProps>`
    display: ${({ state }) => state ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.48);
`
export const ModalContainer = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    border-radius: ${({ theme }) => theme.dimensions.modal.borderRadius};
`
export const ModalHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.palette.colors.background.light};
    padding: 15px;

    
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
`

export const CloseButton = styled.div<CloseButtonProps>`
    width: 15px;
    height: 15px;
    background-image: url(${({ icon }) => icon[0]});
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-image: url(${({ icon }) => icon[1]});
    }
`

export const ModalBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
`

export const ModalPriorityTask = styled.div`
    width: 300px;
    input{
        display: none;
    }

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        cursor: pointer;
        border-radius: 5px;
        transition: all .3s;
    }

    span{
        font-size: 1.3em;
        color: ${({ theme }) => theme.palette.text.disabled};
        font-weight: bold;
        margin-left: 5px;
    }

    .priorities{
        display: flex;
        gap: 10px;
        justify-content: center;
        color: black;
    }

    .high{
        background-color: ${({ theme }) => theme.palette.colors.priorities.high.light};
        color: ${({ theme }) => theme.palette.colors.priorities.high.dark};
        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.high.main};
        }
    }
    .middle{
        background-color: ${({ theme }) => theme.palette.colors.priorities.middle.light};
        color: ${({ theme }) => theme.palette.colors.priorities.middle.dark};
        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.middle.main};
        }
    }
    .low{
        background-color: ${({ theme }) => theme.palette.colors.priorities.low.light};
        color: ${({ theme }) => theme.palette.colors.priorities.low.dark};
        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.low.main};
        }
    }


    /* Checked Priority */
    #high:checked ~ .high{
        background-color: ${({ theme }) => theme.palette.colors.priorities.high.main};
    }

    #middle:checked ~ .middle{
        background-color: ${({ theme }) => theme.palette.colors.priorities.middle.main};
    }

    #low:checked ~ .low{
        background-color: ${({ theme }) => theme.palette.colors.priorities.low.main};
    }

`