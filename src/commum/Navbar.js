import React from 'react';
import img1 from '../img/leila.png'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.nome = this.props.nome;
        this.state = {  }
    }
    render() { 
        return (
            <div class="navbar">
                <img src={img1} alt="" id="logo"></img>
                <NavLink exact to="/">Linha do Tempo</NavLink>
                <NavLink to="/postar">Postar</NavLink>
                <span id="nomePessoa">{this.nome}</span>
            </div>
        );
    }
}
 
export default Navbar;