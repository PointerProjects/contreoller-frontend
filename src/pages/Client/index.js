import React, { useEffect, useState } from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

import api from '../../services/api';

export function Client() {
  const { sideBar } = useContext(MenuContext);
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');

  function handleCancelar() {
    setForm(false);
  }

  function handleCadastrar(e) {
    e.preventDefault();

    if (!nome || !sobrenome || !estado || !cidade || !bairro || !logradouro) {
      return alert('Todos os campos devem ser preenchidos!');
    }

    api
      .post('./cliente', {
        nome,
        sobrenome,
        estado,
        cidade,
        bairro,
        logradouro
      })
      .then((response) => {
        alert('Cliente cadastrado com sucesso');

        clearInputs();
        setForm(false);
      })
      .catch(() => {
        alert('Não foi possível realizar o cadastro');
      });
  }

  function clearInputs() {
    setNome('');
    setSobrenome('');
    setEstado('');
    setCidade('');
    setBairro('');
    setLogradouro('');
  }

  useEffect(() => {
    api.get('/cliente').then((response) => {
      setClientes(response.data.rows.splice(0,10))
    });
  }, [form]);

  return (
    <div className={styles.clientContainer}>
      <NavBar />

      <div className={sideBar ? styles.main : styles.mainMenu}>
        {form ?
          <div className={styles.clientesCadastro}>
            <form>
              <div>
                <p>Nome:</p>
                <input value={nome} onChange={(e) => {setNome(e.target.value);}} />
              </div>
              <div>
                <p>Sobrenome:</p>
                <input value={sobrenome} onChange={(e) => {setSobrenome(e.target.value);}} />
              </div>
              <div>
                <p>Estado:</p>
                <input value={estado} onChange={(e) => {setEstado(e.target.value);}} />
              </div>
              <div>
                <p>Cidade:</p>
                <input value={cidade} onChange={(e) => {setCidade(e.target.value);}} />
              </div>
              <div>
                <p>Bairro:</p>
                <input value={bairro} onChange={(e) => {setBairro(e.target.value);}} />
              </div>
              <div>
                <p>Endereço:</p>
                <input value={logradouro} onChange={(e) => {setLogradouro(e.target.value);}} />
              </div>

              <div className={styles.buttons}>
                <button onClick={handleCancelar}>Cancelar</button>
                <button onClick={handleCadastrar}>Confirmar</button>
              </div>
            </form>
          </div>
        :
          <div className={styles.clients}>
            <p>Clientes</p>
            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <p className={styles.code}>Código</p>
                <p className={styles.name}>Nome do Cliente</p>
                <p className={styles.address}>Endereço</p>
              </div>
              {clientes.map((cliente, index) => (
                <div className={styles.rows} key={index}>
                  <p className={styles.code}>{cliente.id}</p>
                  <p className={styles.name}>{cliente.nome} {cliente.sobrenome}</p>
                  <p className={styles.address}>{cliente.logradouro}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.button}>
              <button onClick={handleForm}>Cadastrar</button>
            </div>
          </div>
        }
      </div>
      <div className={styles.incompatible}>
        <p>Sistema não compatível com seu dispositivo...</p>
      </div>
    </div>
  );
}
