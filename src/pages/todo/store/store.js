import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../container/todoSlice";

export const store = configureStore({
    reducer:{
        todos:todoReducer,
    },
});