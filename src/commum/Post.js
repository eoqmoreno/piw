import React from 'react';
import Button from './Button';
import '../css/post.css';
import { excluirPost, darLike } from '../actions';
import { connect } from 'react-redux';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.nome = this.props.nome;
        //Variavel nome recebe por parametro o nome da pessoa que vem quem a chama
        this.id = this.props.i;
        this.likes = this.props.likes;
        this.fun = this.props.fun;
        this.state = {
            likes : Number(this.likes)
        }
        this.msg = this.props.msg;

        this.excluirPost = this.props.excluirPost;
        this.darLike = this.props.darLike;
    }

    componentDidMount = () =>{

    }

    recebeuLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
        this.fun(this.id);
    };

    remover = () => {
        this.excluirPost(this.id);
    }

    darLikes = () => {
        let post = {
            nome: this.nome,
            qtdLikes: this.likes + 1,
            msg: this.msg,
            id: this.id,
        }
        this.darLike(post);
        this.recebeuLike();
    }

    render() { 
        return (
            <div class="post">
                <span>Nome: {this.nome}</span>
                <br></br>
                <span>{this.msg}</span>
                <br></br>
                <span class="destaque">{this.state.likes}</span>
                <Button title="Like" funcao={this.darLikes}></Button>
                <br/>
                <Button title="Excluir" funcao={this.remover}></Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        excluirPost: (id) => {
            dispatch(excluirPost(id))
        },
        darLike: (post) => {
            dispatch(darLike(post))
        },
    }
}

export default connect(null, mapDispatchToProps)(Post);