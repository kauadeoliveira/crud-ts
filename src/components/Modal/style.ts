import styled from "styled-components";

interface BackdropProps {
    state: boolean;
}

interface CloseButtonProps {
    icon: string;
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
    height: 300px;
    background-color: ${({ theme }) => theme.palette.colors.background.main};
    position: relative;
`
export const ModalHeader = styled.div`
    width: 100%;
    color: white;
`

export const CloseButton = styled.div<CloseButtonProps>`
    width: 15px;
    height: 15px;
    background-image: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    cursor: pointer;
`

export const ModalContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const ModalButton = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;    
`