import React from 'react';
import '../../css/postar.css';
import { connect } from 'react-redux';
import { addPost } from '../../actions';

export class Postar extends React.Component {
    state = {
        nome: "",
        msg:"",
    }

    constructor(props) {
        super(props);
        this.addPost = props.addPost;
    }
        
    
    modificou = (event) =>{
        this.setState({
            ...this.state,
            [event.target.id]:event.target.value,
        });
    }
    
    submeterForm = (event) =>{
        event.preventDefault();
        this.addPost(this.state.nome, this.state.msg,);
        this.setState({
            nome:"",
            msg:"",
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submeterForm}>
                    <label>Nome: </label>
                    <br/>
                    <input type="text" id="nome" name="nome" onChange={this.modificou} value={this.state.nome}></input>
                    <br/>
                    <label>Mensagem:</label>
                    <br/>
                    <textarea id="msg" onChange={this.modificou} value={this.state.msg}></textarea>
                    <br/>
                    <input type="submit" value="Enviar"></input>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        addPost: (nome, msg) => {
            dispatch(addPost(nome, msg))
        },
    }
}

export default connect(null, mapDispatchToProps)(Postar);