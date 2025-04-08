import { SystemContextProvider } from "./types";
import { createContext } from "react";

export enum SystemActionTypes {
    SET_THEME = "SET_THEME",
    SET_SELECTED = "SET_SELECTED",
    SET_HOVERED = "SET_HOVERED",
}

export const defaultContext: SystemContextProvider = {
    theme: "light",

    setTheme: () => {
        throw new Error("setTheme not implemented");
    },
};

export const Context = createContext<SystemContextProvider>(defaultContext);
