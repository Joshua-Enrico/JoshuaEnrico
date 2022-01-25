import { createSlice } from "@reduxjs/toolkit";
import { LightTheme, DarkTheme } from "../styles/Themes";


const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: LightTheme,
        light: true
    },
    reducers: {
        SwitchTheme: (state) => {
            if(state.light === false){
                state.theme = DarkTheme;
                state.light = true;
            } else {
                state.theme = LightTheme;
                state.light = false;
            }
        },
    },
});

export const { SwitchTheme } = themeSlice.actions;
export default themeSlice.reducer; 