import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./redux/apis/authApi";
import themeSlice from "./redux/apis/slices/themeSlice";

const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        theme: themeSlice,
    },
    middleware: def => [...def(), authApi.middleware]
})

export default reduxStore