import React from 'react';
import Post from '../../commum/Post';
import '../../css/galeria.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';

class Galeria extends React.Component {
    constructor(props) {
        super(props);
    }
    recebeuLike = (id) =>{
        console.log(id);
    }
    
    componentDidMount = () => {
        this.props.fetchPosts();
    }
    
    render() { 
        console.log(this.props.posts);
        let lista = [];
        if (this.props.posts != null) {
            lista = this.props.posts.map(
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
            console.log("fetch(galeria)");
        }
    }
}

const mapearEstadoParaProps = (state, props) => {
    return {posts : state.post.post};
}

export default connect(mapearEstadoParaProps, mapDispatchToProps)(Galeria);