/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container, Box, TextField, Button,
} from '@material-ui/core';

import useStyles from './style';

import api from '../../services/api';

export default function Cadastro() {
  const classes = useStyles();
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [vista, setVista] = useState('');
  const [prazo, setPrazo] = useState('');
  const [ncm, setNcm] = useState('');

  async function Cadastrar() {
    if (!nome || !vista || !prazo || !ncm) {
      return alert('Todos os campos devem ser preenchidos!');
    }

    await api
      .post('./produto', {
        nome,
        vista,
        prazo,
        ncm,
      })
      .then((response) => {
        alert('Produto cadastrado com sucesso!');

        limparCampos();
        paginaInicial();
      })
      .catch(() => {
        alert('Não foi possível realizar o cadastro!');
      });
  }

  function paginaInicial() {
    history.push('/');
  }

  function telaListar() {
    history.push('/listar');
  }

  function limparCampos() {
    setNome('');
    setVista('');
    setPrazo('');
    setNcm('');
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.form}>
        <TextField className={classes.input} value={nome} onChange={(e) => { setNome(e.target.value); }} id="outlined-basic" label="Nome" variant="outlined" />
        <TextField className={classes.input} value={vista} onChange={(e) => { setVista(e.target.value); }} id="outlined-basic" label="Valor à vista" variant="outlined" />
        <TextField className={classes.input} value={prazo} onChange={(e) => { setPrazo(e.target.value); }} id="outlined-basic" label="Volor à Prazo" variant="outlined" />
        <TextField className={classes.input} value={ncm} onChange={(e) => { setNcm(e.target.value); }} id="outlined-basic" label="NCM" variant="outlined" />
        <Box className={classes.buttons}>
          <Button className={classes.button} onClick={Cadastrar}>Cadastrar</Button>
          <Button className={classes.buttonBlue} onClick={paginaInicial}>Tela Ininial</Button>
          <Button className={classes.buttonYellow} onClick={telaListar}>Listar</Button>
        </Box>
      </Box>
    </Container>
  );
}
