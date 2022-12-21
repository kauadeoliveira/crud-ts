import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    openModal: boolean;
}

const initialState: InitialState = {
    openModal: false
} 

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state) => {
            state.openModal = !state.openModal
        }
    }
})