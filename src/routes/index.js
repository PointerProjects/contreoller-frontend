import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from '../pages/PaginaInicial';
import Cadastro from '../pages/Cadastro';
import ListaProdutos from '../pages/ListaProdutos';

export default function RouteWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/listar" component={ListaProdutos} />
      </Switch>
    </BrowserRouter>
  );
}
