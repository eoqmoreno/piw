import {configureStore} from "@reduxjs/toolkit";
import { reducerPost } from "../reducers";

const store = configureStore({
    reducer:{
        //aqui você diz o nome do reducer que vai cuidar só dos post
        post: reducerPost,
    }
})

export default store;