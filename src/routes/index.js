import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import PaginaInicial from '../pages/PaginaInicial';
import Clientes from '../pages/Clientes';
import Imoveis from '../pages/Imoveis';
import Alugueis from '../pages/Alugueis';
import Financeiro from '../pages/Financeiro';
import Relatorios from '../pages/Relatorios';
import Cidades from '../pages/Cidades';
import Funcionarios from '../pages/Funcionarios';
import Fornecedores from '../pages/Fornecedores';
import Bancos from '../pages/Bancos';
import Gerais from '../pages/Gerais';
import Sobre from '../pages/Sobre';


export default function RouteWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={PaginaInicial} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/imoveis" exact component={Imoveis} />
        <Route path="/alugueis" component={Alugueis} />
        <Route path="/financeiro" component={Financeiro} />
        <Route path="/relatorios" component={Relatorios} />
        <Route path="/cidades" component={Cidades} />
        <Route path="/funcionarios" component={Funcionarios} />
        <Route path="/fornecedores" component={Fornecedores} />
        <Route path="/bancos" component={Bancos} />
        <Route path="/gerais" component={Gerais} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </BrowserRouter>
  );
}
