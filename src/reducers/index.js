import { createReducer } from "@reduxjs/toolkit";
import { fetchPostSucesso, fetchPostIniciado } from "../actions";

const initialState = {
    post:[],
};

export const reducerPost = createReducer(initialState,{
    [fetchPostIniciado]: (state,action) => {
        console.log("disparar o fetchPostIniciado");
        state.post = null;
        console.log(state.post);
    },
    [fetchPostSucesso]: (state,action) => {
        console.log("disparar o fetchPostSucesso");
        state.post = action.payload;
        console.log(state.post);
    }
});