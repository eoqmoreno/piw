import { createReducer } from "@reduxjs/toolkit";
import { fetchPostSucesso, fetchPostIniciado } from "../actions";

const initialState = {
    post:null,
};

export const reducerPost = createReducer(initialState,{
    [fetchPostIniciado]: (state,action) => {
        state.post = null;
    },
    [fetchPostSucesso]: (state,action) => {
        state.post = action.payload;
    }
});