import { createSlice } from '@reduxjs/toolkit'
import Modal from '../../components/Modal';
interface Modal {
    open: boolean;
}
interface InitialState {
    modalEditTask: Modal;
    modalCreateTask: Modal;
}

const initialState: InitialState = {
    modalCreateTask: {
        open: false
    },
    modalEditTask: {
        open: false
    }
} 

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalEditTask: (state) => {
            state.modalEditTask.open = !state.modalEditTask.open
        },
        openModalCreateTask: (state) => {
            state.modalCreateTask.open = !state.modalCreateTask.open
        }
    }
})