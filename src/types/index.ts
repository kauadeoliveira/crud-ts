import { store } from "../store";

// RootState Type
export type RootState = ReturnType<typeof store.getState>

// Task
export interface TaskProps {
    id: number;
    title: string;
    date: string;
    priority: string | undefined;
    completed?: boolean;
}

// Action Parameter Redux
export interface ActionParameter {
    payload: any;
    type: string;
}