import React from 'react';
import Post from '../../commum/Post';
import '../../css/galeria.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

class Galeria extends React.Component {
    constructor(props) {
        super(props);
        this.posts = this.props.posts;
    }
    recebeuLike = (id) =>{
        console.log(id);
    }

    componentDidMount = () => {
        this.props.fetchPosts();
    }
    
    render() { 
        let lista = [];
        if (this.posts != null) {
            lista = this.posts.map(
                (post) => (
                    <Post nome={post.nome} i={post.id} msg={post.msg} likes={post.qtdLikes} fun={this.recebeuLike}></Post>
                )
            );
        }
        return (
            <div class="galeria">
                <h1 class="destaque">Posts da Cabeleleira Leila</h1>
                {lista}
            </div>
        );
    }
}
 


const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () =>{
            dispatch(fetchPosts());
        }
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {posts : state.post.post};
}

export default connect(mapearEstadoParaProps, mapDispatchToProps)(Galeria);