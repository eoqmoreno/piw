import {createAction} from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://rest.learncode.academy/api/gmodeveloper/posts/";

export const fetchPostIniciado = createAction("FETCH_POST");
export const fetchPostSucesso = createAction("FETCH_POST_SUCESSO");


export const fetchPosts = () => {
    return(dispatch, getState) => {
        console.log("antes de disparar o fetchPostIniciado");
        dispatch(fetchPostIniciado());
        axios({
            method:"GET",
            url: url,
        }).then(response => {
            console.log("antes de disparar o fetchPostSucesso");
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
            console.log("add");
            dispatch(fetchPosts());
        })
    }
}

export const excluirPost = (id) => {
    return(dispatch, getState) => {
        axios({
            method:"DELETE",
            url: url + id,
        }).then(response => {
            console.log("remove");
            dispatch(fetchPosts());
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
            console.log("like");
            dispatch(fetchPosts());

        })
    }
}