import React from 'react';
import Galeria from './Galeria';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Galeria></Galeria>
            </div>
        );
    }
}
 
export default Home;