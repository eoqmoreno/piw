import {createAction} from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://rest.learncode.academy/api/gmodeveloper/posts/";

export const fetchPostIniciado = createAction("FETCH_POST");
export const fetchPostSucesso = createAction("FETCH_POST_SUCESSO");


export const fetchPosts = () => {
    return(dispatch, getState) => {
        dispatch(fetchPostIniciado());
        axios({
            method:"GET",
            url: url,
        }).then(response => {
            dispatch(fetchPostSucesso(response.data));
        })
    }
}

export const addPost = (nome, msg) => {
    let post = {
        nome: nome, 
        qtdLikes: 0,
        msg: msg,
    }
    return (dispatch, getState) => {
        axios({
            method:"POST",
            url: url,
            data: post,
        }).then(response => {
            console.log("add")
        })
    }
}

export const removePost = (id) => {
    return(dispatch, getState) => {
        axios({
            method:"DELETE",
            url: url + id,
        }).then(response => {
            console.log("remove")
        })
    }
}

export const darLike = (post) => {
    return(dispatch, getState) => {
        axios({
            method:"PUT",
            url: url + post.id,
            data: post
        }).then(response => {
            console.log("like")
        })
    }
}