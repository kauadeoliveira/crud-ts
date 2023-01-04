import { store } from "../store";

// RootState Type
export type RootState = ReturnType<typeof store.getState>

// Task
export interface TaskProps {
    id: number;
    title: string | undefined;
    date: string | undefined;
    priority: string | undefined
    completed?: boolean;
}