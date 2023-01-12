import { createSlice } from '@reduxjs/toolkit'
import Modal from '../../components/Modal';
interface Modal {
    open: boolean;
}
interface InitialState {
    modalCreateTask: Modal;
}

const initialState: InitialState = {
    modalCreateTask: {
        open: false
    },
} 

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalCreateTask: (state) => {
            state.modalCreateTask.open = !state.modalCreateTask.open
        }
    }
})