import styled from "styled-components";

interface BackdropProps {
    state: boolean;
}

interface CloseButtonProps {
    icon: string[];
}

export const ModalBackdrop = styled.div<BackdropProps>`
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
export const ModalWrapper = styled.div`
    width: 500px;
    display: flex;
    gap: 15px;
    padding: 15px;
    justify-content: center;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    border-radius: ${({ theme }) => theme.dimensions.modal.borderRadius};
`
export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    color: white;
    font-size: 1.3em;
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

export const ModalContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ModalPriorityTask = styled.div`
    .priority-title{
        font-size: 1.6em;
    }

    display: flex;
    justify-content: center;
    gap: 10px;
    
    input{
        display: none;
    }

    label{
        width: 80px;
        padding: 8px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        transition: all .3s;
    }

    .high{
        background-color: ${({ theme }) => theme.palette.colors.priorities.high.background};

        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.high.hover};
        }
    }
    .middle{
        background-color: ${({ theme }) => theme.palette.colors.priorities.middle.background};

        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.middle.hover};
        }
    }
    .low{
        background-color: ${({ theme }) => theme.palette.colors.priorities.low.background};

        &:hover{
            background-color: ${({ theme }) => theme.palette.colors.priorities.low.hover};
        }
    }


    /* Checked Priority */
    #high:checked ~ .high{
        background-color: ${({ theme }) => theme.palette.colors.priorities.high.hover};
    }

    #middle:checked ~ .middle{
        background-color: ${({ theme }) => theme.palette.colors.priorities.middle.hover};
    }

    #low:checked ~ .low{
        background-color: ${({ theme }) => theme.palette.colors.priorities.low.hover};
    }

`