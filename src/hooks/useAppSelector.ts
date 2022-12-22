import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../types";

// Para evitar digitar (state: RootState) todas as vezes que for usar UseSelector, o próprio Redux indica a criação desse hook.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
