import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./Article";

export const Store = configureStore({
    reducer:{
        [articleApi.reducerPath]:articleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([articleApi.middleware])
});