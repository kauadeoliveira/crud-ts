import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { store } from "../../store";
import { modalSlice } from "../../store/slices/modalSlice";
import { ModalBackdrop, ModalHeader, ModalWrapper } from "./style";
import { RootState } from "../../types";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Modal() {
    const dispatch = useDispatch();
    const { open } = modalSlice.actions
    const handleClose = () => dispatch(open()) 
    const { openModal } = useAppSelector(store => store.modal)

    return(
        <ModalBackdrop state={openModal}>
            <ModalWrapper>
                <ModalHeader>
                    <span className="close-button" onClick={handleClose}>x</span>
                </ModalHeader>
            </ModalWrapper>
        </ModalBackdrop>
    )
}