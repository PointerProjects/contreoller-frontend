import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastros from '../pages/CadastrosBasicos';
import Controle from '../pages/Controle';
import Financeiro from '../pages/Financeiro';
import Agendamentos from '../pages/Agendamentos';
import Relatorios from '../pages/Relatorios';
import Sobre from '../pages/Sobre';


export default function RouteWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Cadastros} />
        <Route path="/controle" component={Controle} />
        <Route path="/financeiro" component={Financeiro} />
        <Route path="/agendamentos" component={Agendamentos} />
        <Route path="/relatorios" component={Relatorios} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
