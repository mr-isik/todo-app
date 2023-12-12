import { createSlice } from "@reduxjs/toolkit";

interface Theme {
  theme: boolean;
}

const initialState: Theme = {
  theme:
    localStorage.getItem("theme") != undefined
      ? JSON.parse(localStorage.getItem("theme") || "{}")
      : true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.theme = !state.theme;
      localStorage.setItem("theme", state.theme.toString());
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
