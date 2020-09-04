import './css/style.css';
import React from 'react';
import Home from './paginas/pagina1/Home';
import Postar from './paginas/pagina2/Postar';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './commum/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar nome="Luis Cláudio"></Navbar>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/postar">
            <Postar></Postar>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;