import React, { useEffect, useState } from 'react';
import { useContext } from "react";

import { NavBar } from "../../components/NavBar";
import { MenuContext } from '../../contexts/menu';

import styles from "./styles.module.scss";

import api from '../../services/api';

export function Properties() {
  const { sideBar } = useContext(MenuContext);
  const [imoveis, setImoveis] = useState([]);
  const [form, setForm] = useState(false);
  const [proprietario, setProprietario] = useState('');
  const [tipo, setTipo] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [logradouro, setLogradouro] = useState('');

  function handleForm() {
    setForm(true);
  }

  function handleCancelar() {
    setForm(false);
  }

  function handleCadastrar(e) {
    e.preventDefault();

    if (!proprietario || !tipo || !estado || !cidade || !bairro || !logradouro) {
      return alert('Todos os campos devem ser preenchidos!');
    }

    api
      .post('./imovel', {
        proprietario,
        tipo,
        estado,
        cidade,
        bairro,
        logradouro
      })
      .then((response) => {
        alert('Imóvel cadastrado com sucesso');

        clearInputs();
        setForm(false);
      })
      .catch(() => {
        alert('Não foi possível realizar o cadastro');
      });
  }

  function clearInputs() {
    setProprietario('');
    setTipo('');
    setEstado('');
    setCidade('');
    setBairro('');
    setLogradouro('');
  }

  useEffect(() => {
    api.get('/imovel').then((response) => {
      setImoveis(response.data.rows.splice(0,10))
    });
  }, [form]);

  return (
    <div className={styles.clientsContainer}>
      <NavBar />

      <div className={sideBar ? styles.main : styles.mainMenu}>
        {form ?
          <div className={styles.clientesCadastro}>
            <form>
              <div>
                <p>Proprietário:</p>
                <input value={proprietario} onChange={(e) => {setProprietario(e.target.value);}} />
              </div>
              <div>
                <p>Tipo:</p>
                <input value={tipo} onChange={(e) => {setTipo(e.target.value);}} />
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
            <p>Imóveis</p>
            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <p className={styles.code}>Código</p>
                <p className={styles.address}>Endereço</p>
                <p className={styles.type}>Categoria</p>
              </div>
              {imoveis.map((imovel, index) => (
                <div className={styles.rows} key={index}>
                  <p className={styles.code}>{imovel.id}</p>
                  <p className={styles.address}>{imovel.logradouro}</p>
                  <p className={styles.type}>{imovel.tipo}</p>
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
