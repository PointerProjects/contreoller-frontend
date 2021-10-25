import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Imovel } from './pages/Imovel';

export default function RouteWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/imovel" exact component={Imovel} />
      </Switch>
    </BrowserRouter>
  );
}
