import { createContext } from "react";

const initialState = {
    apples : ['Macintosh']
}
export const Store = createContext(initialState)