import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Clients } from './pages/Clients';
import { Properties } from './pages/Properties';
import { Finances } from './pages/Finances';
import { Banks } from './pages/Banks';
import { Cities } from './pages/Cities';
import { About } from './pages/About';
import { Employees } from './pages/Employees';
import { General } from './pages/General';
import { Providers } from './pages/Providers';
import { Rent } from './pages/Rent';
import { Reports } from './pages/Reports';

export default function RouteWraper() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/clientes" exact component={Clients} />
        <Route path="/imoveis" exact component={Properties} />
        <Route path="/financeiro" exact component={Finances} />
        <Route path="/bancos" exact component={Banks} />
        <Route path="/cidades" exact component={Cities} />
        <Route path="/sobre" exact component={About} />
        <Route path="/funcionarios" exact component={Employees} />
        <Route path="/gerais" exact component={General} />
        <Route path="/fornecedores" exact component={Providers} />
        <Route path="/alugueis" exact component={Rent} />
        <Route path="/relatorios" exact component={Reports} />
      </Switch>
    </BrowserRouter>
  );
}
