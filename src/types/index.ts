import { store } from "../store";

// RootState Type
export type RootState = ReturnType<typeof store.getState>