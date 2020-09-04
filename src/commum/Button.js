import React from 'react';
import '../css/btn.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.func = this.props.funcao;
        this.state = {  }
    }

    click = () =>{
        if (this.func) {
            this.func();
        }
    }

    render() { 
        return (
            <button class="btn destaque" onClick={this.click}>{this.title}</button>
        );  
    }
}
 
export default Button;