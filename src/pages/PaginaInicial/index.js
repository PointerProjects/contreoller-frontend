import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Button } from '@material-ui/core';

import useStyles from './style';

export default function PaginaIcicial() {
  const classes = useStyles();
  const history = useHistory();

  function telaCadastro() {
    history.push('/cadastro');
  }

  function telaListar() {
    history.push('/listar');
  }

  return (
    <Container className={classes.container}>
      <Button className={classes.button} onClick={telaCadastro}>Cadastrar</Button>
      <Button className={classes.buttonList} onClick={telaListar}>Listar</Button>
    </Container>
  );
}
