import React, { useEffect, useState } from 'react';

import userImg from '../../assets/user.png';
import userAddImg from '../../assets/add-user.png';

import api from '../../services/api';

import './style.css';

function Clientes() {
  const [criar, setCriar] = useState(false);
  const [listar, setListar] = useState(false);
  const [atualizarClientes, setAtualizarClientes] = useState(false);
  const [clientes, setClientes] = useState([]);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');

  async function Cadastrar() {
    if (!nome || !sobrenome || !estado || !cidade || !bairro || !logradouro) {
      return alert('Todos os campos devem ser preenchidos!');
    }

    await api
      .post('./cliente', {
        nome,
        sobrenome,
        estado,
        cidade,
        bairro,
        logradouro,
      })
      .then((response) => {
        alert('Cliente cadastrado com sucesso!');

        limparCampos();
        setAtualizarClientes(true);
      })
      .catch(() => {
        alert('Não foi possível realizar o cadastro!');
      });
  }

  function limparCampos() {
    setNome('');
    setSobrenome('');
    setEstado('');
    setCidade('');
    setBairro('');
    setLogradouro('');
  }

  function handleCriar() {
    setCriar(true);
    setListar(false)
  }

  function handleListar() {
    setCriar(false);
    setListar(true)
  }

  useEffect(() => {
    api.get('/cliente').then((response) => {
      setClientes(response.data);
      setAtualizarClientes(false);
    });
  }, [atualizarClientes]);

  return (
    <div className="clientes">
    <div className="row">
        <div className="card green" onClick={handleListar}>
        <h2>Listar Clientes</h2>
        <p>Gerencie seus Clientes</p>
        <img className="image" src={userImg} alt="User" />
        </div>

        <div className="card blue" onClick={handleCriar}>
        <h2>Criar Clientes</h2>
        <p>Crie novos Clientes</p>
        <img className="image" src={userAddImg} alt="settings" />
        </div>
    </div> 

    {criar ? 
      <div className="form blue">
          <input placeholder="Nome" value={nome} onChange={(e) => { setNome(e.target.value); }} />
          <input placeholder="Sobrenome" value={sobrenome} onChange={(e) => { setSobrenome(e.target.value); }} />
          <input placeholder="Estado" value={estado} onChange={(e) => { setEstado(e.target.value); }} />
          <input placeholder="Cidade" value={cidade} onChange={(e) => { setCidade(e.target.value); }} />
          <input placeholder="Bairro" value={bairro} onChange={(e) => { setBairro(e.target.value); }} />
          <input placeholder="Endereço" value={logradouro} onChange={(e) => { setLogradouro(e.target.value); }} />
          <button onClick={Cadastrar}>Cadastrar</button>
      </div>
    :
      null}

    {listar ?
      <div className="form green">
        <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Estado</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Endereço</th>
            </tr>
        </thead>

        <tbody>
        {clientes.map((item) => (
          <tr className="item" key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome} {item.sobrenome}</td>
            <td>{item.estado}</td>
            <td>{item.cidade}</td>
            <td>{item.bairro}</td>
            <td>{item.logradouro}</td>
      </tr>
        ))}
        </tbody>
    </table>
      </div>
    :
      null
    } 
    </div> 
  );
}

export default Clientes;
