import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "themeSlice",
    initialState: { show: true },
    reducers: {
        toggleSidebar: (state, { payload }) => {
            state.show = payload
        }
    },
    extraReducers: builder => builder

})

export const { toggleSidebar } = themeSlice.actions
export default themeSlice.reducer