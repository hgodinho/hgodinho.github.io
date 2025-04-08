export type Theme = "light" | "dark";

export type SystemState = {
    theme: Theme;
};

export type SystemContextProvider = SystemState & {
    setTheme: (theme: Theme) => void;
};

export type SystemContextProps = {
    theme?: Theme;
};

export type SystemAction = {
    type: string;
    payload: Partial<SystemState>;
};
