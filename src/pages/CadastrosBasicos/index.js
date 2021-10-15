import React, { useState } from 'react';

import NavBar from '../../components/NavBar';
import Clientes from '../../components/Clientes';

import './style.css';

function CadastrosBasicos() {
  const [clientes, setClientes] = useState(true);

  function handleClientes() {
    setClientes(true);
  }

  function handleClose() {
    setClientes(false)
  }

  return (
    <div className='container'>
      <NavBar />
      <div className='main'>
        <nav className='sidebar'>
          <ul>
            <li onClick={handleClientes}><p>Clientes</p></li>
            <li onClick={handleClose}><p>Imóveis</p></li>
            <li onClick={handleClose}><p>Componentes</p></li>
            <li onClick={handleClose}><p>Cidades</p></li>
            <li onClick={handleClose}><p>Bairros</p></li>
            <li onClick={handleClose}><p>Funcionários</p></li>
            <li onClick={handleClose}><p>Cargos</p></li>
            <li onClick={handleClose}><p>Profissões</p></li>
          </ul>
        </nav>
        
        {clientes ? 
          <Clientes />
        : 
          <h1>Em construção...</h1>}
      </div>
    </div>
  );
}

export default CadastrosBasicos;
